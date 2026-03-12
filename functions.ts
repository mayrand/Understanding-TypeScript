function add(a: number, b=7): number {
    return a+b;
}

function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
}

function logMessage(message: string): void {
    console.log(message);
}

// (m: string) => void is the type of the callback function that performJob expects. It's not an arrow function.
function performJob(cb: (m: string) => void): void {
    console.log("Starting job...");
    cb("Job in progress...");
    console.log("Job finished.");
}

performJob(logMessage);

type User = {
    name: string;
    age: number;
    greet: (greeting: string) => void;
}

let user: User = {
    name: "Alice",
    age: 30,
    greet: (greeting) => {
        console.log(`${greeting}, I'm ${user.name} and I'm ${user.age} years old.`);
    }};

let userJoe: User = {
    name: "Joe",
    age: 44,
    greet(greeting) {
        console.log(`${greeting}, I'm ${userJoe.name} and I'm ${userJoe.age} years old.`);
    }};

user.greet("Hello");
userJoe.greet("Hello");