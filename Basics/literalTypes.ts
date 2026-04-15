let userRoles: 'admin' | 'user' | 'guest';
let user2 = {
    role: userRoles
} = {
    role: "user"
}

let user3 = {
    role: userRoles // Type '"users"' is not assignable to type '"admin" | "user" | "guest"'. Did you mean '"user"'?
} = {
   // role: "users"
   role: "user"
}

let possibleResulsts2: [1|-1, 1|-1];
possibleResulsts2 = [1, -1];
possibleResulsts2 = [-1, 1];
//possibleResulsts2 = [0, 1]; // Error: Type '0' is not assignable to type '1 | -1'.

type userRoles2 = 'admin' | 'user' | 'guest';
let user4: {
    role: userRoles2
} = {
    role: "admin"
};