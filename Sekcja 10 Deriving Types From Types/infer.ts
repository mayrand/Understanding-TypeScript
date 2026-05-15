function add(x: number, y: number) {
    return x + y;
}

type AddFn = typeof add;
type AddFnReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;
// This is a **conditional type with `infer`** that extracts the return type of a function.

// Breaking it down piece by piece:

// - **`T extends (...args: any[]) => infer R`** — checks if `T` is a function type. If it is, TypeScript *infers* the return type and captures it in the type variable `R`.
// - **`? R`** — if `T` is a function, resolve to `R` (the inferred return type).
// - **`: never`** — if `T` is not a function, resolve to `never` (meaning "no valid type").

// **Example usage** with the code in your file:

type Result = AddFnReturnValueType<AddFn>; // number

// `AddFn` matches the pattern `(...args: any[]) => infer R`, so `R` is inferred as `number`, and that's what the type resolves to.

// This is essentially a manual reimplementation of TypeScript's built-in utility type `ReturnType<T>`, which works the same way.

// https://www.typescriptlang.org/docs/handbook/utility-types.html