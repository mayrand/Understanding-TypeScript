type User = {
    name: string;
    age: number;
}

type UserKeys = keyof User; // UserKeys is now "name" | "age"

let validaKeys: UserKeys = "name"; // This is valid
// let invalidKeys: UserKeys = "email"; // This would cause a TypeScript error, as "email" is not a key of User
