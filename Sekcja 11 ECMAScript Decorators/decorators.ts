// https://github.com/typestack/class-validator - Decorator-based property validation for classes.

function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext){
    console.log(`target: `);
    console.log(target);
    console.log(`ctx: `);
    console.log(ctx);
    
    return class extends target {
        age = 35;
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
console.log(max);