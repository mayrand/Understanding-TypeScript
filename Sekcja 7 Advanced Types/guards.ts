type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// Type guard function to check if a Source is a FileSource (returns a type predicate (boolean under the hood))
function isFileSource(source: Source): source is FileSource {
    return source.type === 'file';
}

function loadData(source: Source) {
    if (isFileSource(source)) {
        source.path; // TypeScript knows this is a FileSource
        return;
    }
    source.connectionUrl; // TypeScript knows this is a DBSource
}

class User {
    constructor(public name: string) { }

    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) { }

    scan() {
        // ...
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan(); // TypeScript knows this is an Admin
}