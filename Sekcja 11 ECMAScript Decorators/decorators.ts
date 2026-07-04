// https://github.com/typestack/class-validator - Decorator-based property validation for classes.

function logger(target: any, ctx: ClassDecoratorContext){
    console.log(`target: `);
    console.log(target);
    console.log(`ctx: `);
    console.log(ctx);
}

@logger
class Person{
    name = 'Max';
    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// target:
//     [class Person]
// ctx:
// {
//     kind: 'class',
//     name: 'Person',
//     metadata: undefined,
//     addInitializer: [Function (anonymous)]
// }