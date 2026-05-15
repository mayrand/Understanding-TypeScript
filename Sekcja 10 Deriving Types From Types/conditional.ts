type StringArray = string[];
// type ElementType = StringArray[number]; // string
type ElementType<T extends any[]> = T[number]; // it's good but only for arrays
type Example1 = ElementType<StringArray>; // string
let text = "asdf";
// type Example2 = ElementType<typeof text>; // Type 'string' does not satisfy the constraint 'any[]'.

type GetElementType<T> = T extends any[] ? T[number] : never; // can be interpreted as: if T is an array, then return the type of its elements, otherwise return never
type Example3 = GetElementType<StringArray>; // string
type Example4 = GetElementType<typeof text>; // never


type FullNamePerson = {
    firstName: string;
    lastName: string;
};

type FullNameOrNothing<T> = T extends FullNamePerson ? T : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
    if ("firstName" in person && "lastName" in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as unknown as FullNameOrNothing<T>;
    }

    throw new Error("Invalid person object");
}