let names: Array<string> = ["Alice", "Bob", "Charlie"];

type DataStore<T> = {
    [key: string]: T;
    [key: number]: T;
    [key: symbol]: T;
};

let store: DataStore<string | number | boolean> = {};

store["name"] = "Alice";
store["age"] = 30;
store["isAdmin"] = true;

let nameStore: DataStore<string> = {};
nameStore["firstName"] = "Alice";
nameStore["lastName"] = "Smith";


function merge<T, U>(obj1: T, obj2: U): [T, U] {
    return [obj1, obj2];
}
const obj1 = merge(1, 2);
console.log(obj1);
const obj2 = merge("Hello", 1);
console.log(obj2);



function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b };
}

const merged = mergeObj({ name: "Alice" }, { age: 30 });
/* infered type:
function mergeObj<{
    name: string;
    age?: never;
} | {
    age: number;
    name?: never;
}>(a: {
    name: string;
    age?: never;
} | {
    age: number;
    name?: never;
}, b: {
    name: string;
    age?: never;
} | {
    age: number;
    name?: never;
}): {
    name: string;
    age?: never;
} | {
    age: number;
    name?: never;
}*/

function mergeObj2<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

const merged2 = mergeObj2({ name: "Alice" }, { age: 30 });
/* infered type:
function mergeObj2<{
    name: string;
}, {
    age: number;
}>(a: {
    name: string;
}, b: {
    age: number;
}): {
    name: string;
} & {
    age: number;
}*/



class User<T> {
    constructor(public id: T) {}
}

const user1 = new User(1);
user1.id; // type is number


interface Repository<T> {
    getById(id: T): string | undefined;
    save(entity: T): void;
}
class UserRepository implements Repository<number> {
    private users: Map<number, string> = new Map(); 
    getById(id: number): string | undefined {
        return this.users.get(id);
    }       
    save(entity: number): void {
        this.users.set(entity, `User${entity}`);
    }
}

const userRepo = new UserRepository();
userRepo.save(1);
console.log(userRepo.getById(1)); // Output: 1
