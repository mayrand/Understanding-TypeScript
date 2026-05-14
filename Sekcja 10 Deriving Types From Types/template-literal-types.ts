const userName = "John Doe";

const greeting = `Hello, ${userName}! Welcome to TypeScript.`;

console.log(greeting); // Output: Hello, John Doe! Welcome to TypeScript.

type ReadPermissions = "read" | "no-read";
type WritePermissions = "write" | "no-write";

//type FilePermissions = 'no-read-write' | 'read-no-write' | 'read-write' | 'no-read-no-write';
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    name: string;
    permissions: FilePermissions;
}

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
    [K in DataFileEventNames]: (file: DataFile) => void;
}