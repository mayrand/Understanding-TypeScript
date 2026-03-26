class User {
    protected age: number = 0; // Protected property, accessible in subclasses if private it will not be accessible in subclasses.
    constructor(private name: string, private lastName: string) { }
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

    static SomeIdentifier = "This is a static property";
    static someStaticMethod() {
        console.log("This is a static method " + User.SomeIdentifier);
    }
}

const user = new User("John", "Doe");
console.log(user.fullName); // "John Doe"
// user.fullName = "Jane Doe"; // Error: Cannot assign to 'fullName' because it is a read-only property.

user.Age = 30;
user.greet(); // "Hello, my name is John Doe. I am 30 years old."
User.someStaticMethod(); // "This is a static method This is a static property"


class Admin extends User {
    constructor(name: string, lastName: string, age: number) {
        super(name, lastName);
        super.Age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.fullName}. I am an admin. I am ${this.age} years old.`);
    }
    static SomeIdentifier = "This is a static property for Admin";
}

const admin = new Admin("Alice", "Smith", 35);
admin.greet(); // "Hello, my name is Alice Smith. I am an admin. I am 35 years old."
Admin.someStaticMethod(); // "This is a static method This is a static property"