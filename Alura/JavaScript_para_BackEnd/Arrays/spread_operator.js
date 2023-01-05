const grades = [7, 7, 8, 9];

let newGrades = grades; // This copy only the reference to the array
newGrades.push(10); // This will change also the original array

console.log(grades); // [7, 7, 8, 9, 10]
console.log(newGrades); // [7, 7, 8, 9, 10]

newGrades = [...grades]; // This is the "spread operator" and it "remove" the values from the original array, so we copy into a new one
newGrades.push(5);

console.log(grades); // [7, 7, 8, 9, 10]
console.log(newGrades); // [7, 7, 8, 9, 10, 5] // This is the new array

console.log(...grades);

// Other alternative to add elements using spread operator
let newGrades2 = [5, 6, ...grades, 10, 11];
console.log(newGrades2); // [5, 6, 7, 7, 8, 9, 10, 10, 11]