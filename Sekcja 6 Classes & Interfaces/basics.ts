class User {
    name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class User2 {
    #privateJsField: string; // JavaScript private field
    constructor(public name: string, private age: number) { this.#privateJsField = "This is a private field"; }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this.#privateJsField);
    }
}

let alice = new User2("Alice", 30);
console.log(alice.name); // "Alice"
//console.log(alice.age);  // Error: Property 'age' is private and only accessible within class 'User2'.
//alice.#privateJsField // Property '#privateJsField' is not accessible outside class 'User2' because it has a private identifier.ts(18013)
alice.greet(); // "Hello, my name is Alice and I am 30 years old."

let bob = new User("Bob", 25);
// bob.age = 26; // Error: Cannot assign to 'age' because it is a read-only property.
console.log(bob.name + ' ' + bob.age); // "Bob 25"