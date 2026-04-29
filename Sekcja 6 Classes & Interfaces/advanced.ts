// interfaces are only TS feature

interface Authenticable {
    username: string;
    password: string;
    authenticate(): boolean;
}

// extending existing interface by using declaration merging, it can't be done with types.
interface Authenticable {
    role: string;
}

abstract class User {
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

// const user = new User("John", "Doe"); // Error: Cannot create an instance of an abstract class.
// user.fullName = "Jane Doe"; // Error: Cannot assign to 'fullName' because it is a read-only property.
User.someStaticMethod(); // "This is a static method This is a static property"


class Admin extends User implements Authenticable, authenticatedAdmin {
    role: string = "admin";
    adminLevel: number = 1;
    constructor(name: string, lastName: string, age: number) {
        super(name, lastName);
        super.Age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.fullName}. I am an admin. I am ${this.age} years old.`);
    }
    static SomeIdentifier = "This is a static property for Admin";

    get username() {
        return this.fullName;
    }

    get password() {
        return "admin123";
    }

    authenticate() {
        return this.username === "Alice Smith" && this.password === "admin123";
    }
}

const admin = new Admin("Alice", "Smith", 35);
admin.greet(); // "Hello, my name is Alice Smith. I am an admin. I am 35 years old."
Admin.someStaticMethod(); // "This is a static method This is a static property"

let user: Authenticable = {
    username: "admin",
    password: "password",
    role: "user",
    authenticate() {
        return this.username === "admin" && this.password === "password";
    }
};


// A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.
// For example, you might want to define the type of a sum function that takes two numbers as input and returns their sum.
// You could write this code:

type SumFn = (a: number, b: number) => number; // function type

let sum: SumFn; // making sure sum can only store values of that function type

sum = (a, b) => a + b; // assigning a value that adheres to that function type
// Alternatively, you can also define the SumFn type via an interface:

interface SumFn2 {
    (a: number, b: number): number;
}

let sum2: SumFn2; // making sure sum2 can only store values of that function type

sum2 = (a, b) => a + b;


//Ensuring Base Types with Interfaces
function AuthenticateUser(user: Authenticable) {
    if (user.authenticate()) {
        console.log("User authenticated successfully.");
    } else {
        console.log("Authentication failed.");
    }
}

//Extending Interfaces
interface authenticatedAdmin extends Authenticable {
    adminLevel: number;
}

(admin as authenticatedAdmin).adminLevel = 1; // Type assertion to access adminLevel property
(admin as authenticatedAdmin).role = "admin authenticated"; // Type assertion to access role property
(admin as Authenticable).role = "admin"; // Type assertion to access role property
console.log(admin.role); // Output: "admin"