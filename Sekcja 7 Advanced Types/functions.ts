function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `The string has ${numberOfWords} words.`;
    }
    return val.length;
}

const numOfWords = getLength("Hello world! This is TypeScript.");
console.log(numOfWords); // Output: The string has 6 words. But the type is string | number if we don't add function overloads.
//numOfWords.length; // Error: Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
const arrayLength = getLength([1, 2, 3, 4, 5]);
console.log(arrayLength); // Output: 5