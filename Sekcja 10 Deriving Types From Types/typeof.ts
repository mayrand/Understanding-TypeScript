const userName = "John Doe";
console.log(typeof userName); // Output: "string", this is js typeof
type UserName = typeof userName; // UserName is now of type "John Doe", this is TypeScript's typeof for types
// const anotherUserName: UserName = "Jane Smith"; // This is invalid Type '"Jane Smith"' is not assignable to type '"John Doe"'.
// const invalidUserName: UserName = 123; // This would cause a TypeScript error

let phoneNumber = 1234567890;
type PhoneNumber = typeof phoneNumber; // PhoneNumber is now of type number
const anotherPhoneNumber: PhoneNumber = 9876543210; // This is valid
console.log(anotherPhoneNumber);