const array1 = [1, 2, 3];
const array2 = [6, 7, 8, 9, 2];

console.log("Array1:", array1);
console.log("Array2:", array2);

const concatenated = array1.concat(array2);
console.log("Concat: " + concatenated);

const even = concatenated.filter(val => val % 2 == 0);
console.log("Even:", even);

const findedElement = concatenated.find(val => val == 2);
console.log("Find == 2:", findedElement); // only the first one

const notFindedElement = concatenated.find(val => val == 200);
console.log("Find == 200:", notFindedElement);

const findedIndex = concatenated.findIndex(val => val == 2);
console.log("FindIndex == 2:", findedIndex);

const lastIndex = concatenated.lastIndexOf(2); // In this case is not a callback function
console.log("LastIndex == 2:", lastIndex);

concatenated.forEach((val) => console.log(`ForEach: ${val}`)); // We can use a callback only for the value but
concatenated.forEach((val, index) => console.log(`ForEach: ${val} at ${index}`)); // Also for value and index

const popped = concatenated.pop(); // removes the last element
console.log("Popped:", popped);
console.log("Concatenated:", concatenated); // Alter the original array

const shifted = concatenated.shift(); // removes the first element
console.log("Shifted:", shifted);
console.log("Concatenated:", concatenated); // Alter the original array

const sum = concatenated.reduce((acc, val) => acc + val); // acc is the accumulator, val is the value
console.log("Sum:", sum);

const reversedSum = concatenated.reduceRight((acc, val) => acc + val); // acc is the accumulator, val is the value
console.log("Reverse Sum:", reversedSum);

const sliced = concatenated.slice(2, 4); // from index 2 to index 4 (not included)
console.log("Sliced:", sliced);

concatenated.sort(); // Sorts the array
console.log("Sorted:", concatenated);

concatenated.sort((a, b) => b - a); // Sorts the array in reverse order
console.log("Reversed Sort:", concatenated);

const splice = concatenated.splice(2, 2); // Removes 2 elements from index 2
console.log("Splice:", splice);

const sampleArray = [1, 10, 4];
// sampleArray = [30, 1, 2] // The variable const cannot be reassigned
// But the const array can be modified
sampleArray.push(100);
console.log(sampleArray);

// Concat without and array
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayOriginal)
console.log(arrayConcat)