type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

let mathOperations: Operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// type Results1 = {
//     add: number;
//     subtract: number;
// };

// let mathResults1: Results1 = {
//     add: mathOperations.add(5, 2), 
//     subtract: mathOperations.subtract(5, 2) 
// };

// The above code is fine, but it can be easily broken if we add more operations to the Operations type. We would have to manually update the Results1 type and the mathResults1 object. This is where mapped types come in handy.

type Results<T> = {
    [K in keyof T]: number;
};

let mathResults: Results<Operations> = {
    add: mathOperations.add(5, 2),
    subtract: mathOperations.subtract(5, 2)
};

