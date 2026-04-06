type FileSource = { path: string };
const fileSource: FileSource = {
    path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    if ('path' in source) {
        source.path; // TypeScript knows this is a FileSource
        return;
    }
    source.connectionUrl; // TypeScript knows this is a DBSource
}