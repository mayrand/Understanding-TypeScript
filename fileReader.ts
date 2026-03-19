import {readFile} from 'node:fs';

readFile('./README.md', 'utf-8', (err: any, data: any) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
