type User = {
    name: string;
    age: number;
}

type UserKeys = keyof User; // UserKeys is now "name" | "age"

let validaKeys: UserKeys = "name"; // This is valid
// let invalidKeys: UserKeys = "email"; // This would cause a TypeScript error, as "email" is not a key of User

function getProp<T extends object, K extends keyof T>(obj: T, key: K) {
    const val = obj[key];
    if(val === undefined || val === null) {
        throw new Error(`Property ${String(key)} does not exist on object`);
    }
    return val;
}

const data = {
    id: 1,
    title: "Hello World",
    isPublished: true
};

const title = getProp(data, "isPublished"); 

