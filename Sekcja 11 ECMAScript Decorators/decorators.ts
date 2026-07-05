// https://github.com/typestack/class-validator - Decorator-based property validation for classes.

function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext){
    console.log(`target: `);
    console.log(target);
    console.log(`ctx: `);
    console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext){
    console.log(`autobind target: `);
    console.log(target);
    console.log(`autobind ctx: `);
    console.log(ctx);
}

@logger
class Person{
    name = 'Max';
    
    constructor() {
        this.greeting = this.greeting.bind(this); // without this on line 40 there will be TypeError: Cannot read properties of undefined (reading 'name')
    }
    @autobind
    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const max = new Person();
const greet = max.greeting;
greet(); 
