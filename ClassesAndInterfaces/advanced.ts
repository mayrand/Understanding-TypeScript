class User{
    constructor(private name: string, private lastName: string) {}
    get fullName() {
        return this.name + " " + this.lastName;
    }
}

const user = new User("John", "Doe");
console.log(user.fullName); // "John Doe"
// user.fullName = "Jane Doe"; // Error: Cannot assign to 'fullName' because it is a read-only property.