let user: { name: string; age: number } = {
  name: 'Max',
  age: 30,
};

// Empty object type - means any non-nullish value can be assigned to it.
let val: {} = 5; 
let val2: {} = null; // Type 'null' is not assignable to type '{}'
let val3: {} = undefined; // Type 'undefined' is not assignable to type '{}'
let val4: {} = {}; 

//Record type - allows us to define an object with specific key and value types.
let data: Record<string, number>;
data = {
  '2021-01-01': 100,
  '2021-01-02': 150,
  //1: "ASDF", // Error: Type 'string' is not assignable to type 'number'.
  //ASDF: "ASDF", // Error: Type 'string' is not assignable to type 'number'.
  asdf: 200,
};