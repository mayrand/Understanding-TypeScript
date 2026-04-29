//optional parameter
function generateError(msg?: string): void {
    if (msg) {
        console.log(msg);
    } else
        console.log("An error occurred");
}

generateError("Something went wrong");
generateError();

type User = {
    name: string;
    age?: number; //optional property
}

const user1: User = {
    name: "Alice",
    age: 30
};

const user2: User = {
    name: "Bob"
};