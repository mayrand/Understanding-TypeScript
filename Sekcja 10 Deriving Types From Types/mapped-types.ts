type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

let mathOperations: Operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
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
    readonly [K in keyof T]?: number; // Operations are optional in the Operations type, but we want them to be required in the Results type. The -? removes the optional modifier from the properties.
};

let mathResults: Results<Operations> = {
    add: mathOperations.add!(5, 2),
    subtract: mathOperations.subtract!(5, 2) // Exclamation mark is used to assert that the properties are not undefined, since we know that they will be defined in this context.
};

//mathResults.add = 10; // Error: Cannot assign to 'add' because it is a read-only property. Readonly can be used on normal properties too.