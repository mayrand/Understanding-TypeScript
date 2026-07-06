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

// bottom most decorator executes first, factories in declaration direction
// logger factory
// app.ts:11 WithTemplate factory
// app.ts:14 hook: [object HTMLDivElement]
// app.ts:15 <div id=​"app">​…​</div>​
// app.ts:30 Creating person object...
// app.ts:4 Logging...
// app.ts:5 class Person {
//     constructor() {
//         this.name = 'Max';
//         console.log('Creating person object...');
//     }
// }
// app.ts:6 Logging person