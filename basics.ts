let userName: string;
userName = 'Max';
console.log(userName);

let hobbies: string[] = ['Sports', 'Cooking'];
hobbies.push(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let users: (string | number)[] = ['Max', 30];
users.push('Anna');
users.push(25);

let users2: Array<string | number>;
users2 = ['Max', 30];