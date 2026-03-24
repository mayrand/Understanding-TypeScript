class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class User2 {
    constructor(public name: string, public age: number) { }
}

let alice = new User2("Alice", 30);
console.log(alice.name); // "Alice"
console.log(alice.age);  // 30