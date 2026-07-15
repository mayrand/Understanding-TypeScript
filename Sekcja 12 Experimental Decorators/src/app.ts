function Logger(log: string) {
    console.log('logger factory');
    return function (target: Function) {
        console.log('Logging...'); // decorator is executed when js reads class definition, not when class is instantiated
        console.log(target);
        console.log(log);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('WithTemplate factory');
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

@Logger('Logging person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

function Log(target: any, propertyName: string | symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

//target will be contructor function if it is a static method and prototype if it is a instance method
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive.");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

// logger factory
// app.ts:11 WithTemplate factory
// app.ts:14 hook: [object HTMLDivElement]
// app.ts:15 div#app
// app.ts:30 Creating person object...
// app.ts:4 Logging...
// app.ts:5 class Person {
//     constructor() {
//         this.name = 'Max';
//         console.log('Creating person object...');
//     }
// }
// app.ts:6 Logging person
// app.ts:35 Property decorator
// app.ts:36 {getPriceWithTax: ƒ}constructor: class ProductgetPriceWithTax: ƒ getPriceWithTax(tax)set price: ƒ price(val)[[Prototype]]: Object 'title'