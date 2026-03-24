class User{
    private age: number = 0;
    constructor(private name: string, private lastName: string) {}
    get fullName() {
        return this.name + " " + this.lastName;
    }

    set Age(age: number) {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.fullName}. I am ${this.age} years old.`);
    }
}

const user = new User("John", "Doe");
console.log(user.fullName); // "John Doe"
// user.fullName = "Jane Doe"; // Error: Cannot assign to 'fullName' because it is a read-only property.

user.Age = 30;
user.greet(); // "Hello, my name is John Doe. I am 30 years old."