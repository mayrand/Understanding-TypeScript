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