// A function becomes a constructor when you call it with new.
// JavaScript then:

// creates a new object
// binds this to that object
// links the object to the function’s prototype
// returns the object automatically

function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

//Modern JavaScript has class, but it’s only syntactic sugar over constructor functions.
class Car2 {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}

// You can define methods inside the constructor:
// But every single object you create will get its own copy of getAge(), which is wasteful.
// Using Car.prototype.getAge creates one shared function, reused by all instances — much more efficient.
Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
};

const myCar = new Car("Toyota", 2018);

console.log(myCar.brand);      // "Toyota"
console.log(myCar.getAge());   // works
console.log(myCar instanceof Car); // true

// Whenever you create a regular function, JavaScript automatically gives it a property 

function Car2() {}
console.log(Car2.prototype);

// This is not the function’s prototype —
// it is the prototype for objects that will be created by that function when used with new.

// When you do:
// const c = new Car();
// JavaScript performs:
// Step 1: Create a new empty object:
// const c = {};
// Step 2: Set that object’s internal prototype:
// c.[[Prototype]] = Car.prototype;
// This is the crucial step.
// Step 3: Call the constructor:
// Car.call(c);
// Step 4: Return the object:
// return c;

// 4. Property lookup follows the prototype chain
// When you access:
// c.getAgeShow 
// JavaScript looks in order:
// Does c have a property called getAge?
// If yes → use it
// If no → go next
// Look inside c.[[Prototype]] → which is Car.prototype
// If found → return it
// If not found, go to Car.prototype.[[Prototype]], which is usually Object.prototype
// If still not found → return undefined
// This chain is called the prototype chain.