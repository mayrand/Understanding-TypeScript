function Logger(log: string) {
    return function (target: Function) {
        console.log('Logging...'); // decorator is executed when js reads class definition, not when class is instantiated
        console.log(target);
        console.log(log);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hook = document.getElementById(hookId);
        console.log(`hook: ${hook}`);
        console.log(hook);
        const p = new constructor();
        if (hook) {
            hook.innerHTML = template;
            hook.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger('Logging person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

// hook: [object HTMLDivElement]
// app.ts:13 <div id=​"app">​<h1>​Max​</h1>​</div>​
// app.ts:28 Creating person object...

// The JavaScript/TypeScript runtime does — automatically, as part of processing the @ decorator syntax. You never call the inner function yourself.

// When you write:

// @WithTemplate('<h1>My person object</h1>', 'app')
// class Person { ... }
// the runtime effectively does this:

// // 1. Evaluate the factory call to get the actual decorator
// const decorator = WithTemplate('<h1>My person object</h1>', 'app');

// // 2. Call that decorator, passing the class constructor as the argument
// decorator(Person);
// //        ^^^^^^ this is what lands in `constructor`
// So constructor is the Person class itself. In JavaScript a class is its constructor function — the class declaration and the constructor function are the same object. That's why constructor: any receives Person.