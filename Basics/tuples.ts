let possibleResults: [number, number];
possibleResults = [1, 2];
//possibleResults = [1, 2, 3]; // Error: Type '[number, number, number]' is not assignable to type '[number, number]'.
possibleResults.push(3); // This is allowed, but it will not be part of the tuple type.
console.log(possibleResults); // Output: [1, 2, 3]