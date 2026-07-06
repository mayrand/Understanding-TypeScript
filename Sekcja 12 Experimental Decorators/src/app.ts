function Logger(log: string) {
    return function (target: Function) {
        console.log('Logging...'); // decorator is executed when js reads class definition, not when class is instantiated
        console.log(target);
        console.log(log);
    }
}

@Logger('Logging person')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);