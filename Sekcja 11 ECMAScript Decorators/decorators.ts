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

@logger
class Person{
    name = 'Max';
    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const max = new Person();
const julie = new Person();