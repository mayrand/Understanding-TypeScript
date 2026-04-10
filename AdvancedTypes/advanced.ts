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