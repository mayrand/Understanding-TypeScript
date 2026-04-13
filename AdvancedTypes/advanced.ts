type DataStore = {
    [key: string]: string | number | boolean;
    [key: number]: string | number | boolean;
    [key: symbol]: string | number | boolean;
};

let store: DataStore = {};

store["name"] = "Alice";
store["age"] = 30;
store["isAdmin"] = true;

store[1] = "One";
store[2] = 2;
store[3] = false;

const sym = Symbol("unique");
store[sym] = "Symbol Value";



let roles = ["admin", "editor", "viewer"] as const;
//roles.push("guest"); // Error: Property 'push' does not exist on type 'readonly ["admin", "editor", "viewer"]'.
type Role = typeof roles[number];
function assignRole(user: string, role: Role) {
    console.log(`Assigned role ${role} to user ${user}`);
}
assignRole("Alice", "admin");
assignRole("Bob", "editor");
// assignRole("Charlie", "guest"); // Error: Argument of type '"guest"' is not assignable to parameter of type 'Role'.


// record types are equivalent to index signatures, but they are more concise and easier to read. They also allow you to specify the type of the keys and values in a more flexible way.
let DataStoreRecord: Record<string, string | number | boolean> = {};
DataStoreRecord["name"] = "Alice";
DataStoreRecord["age"] = 30;
DataStoreRecord["isAdmin"] = true;
DataStoreRecord[1] = "One";
DataStoreRecord[2] = 2;
DataStoreRecord[3] = false;



const dataEntries = {
    entry1: 0.23,
    entry2: -0.45,
} satisfies Record<string, number>;

dataEntries.entry3 = 0.67; // Error: Property 'entry3' does not exist on type 'Record<string, number>'.