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
