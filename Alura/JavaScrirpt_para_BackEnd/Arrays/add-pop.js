const grades = [10, 6, 8]

// Add new grade
grades.push(7);
console.log(grades);

// Add another one
grades.push(10);
console.log(grades);

// Remove the last one
console.log("Popping: " + grades.pop());
console.log(grades);

let sum = grades.reduce((nextVal, currentVal) => nextVal + currentVal)
let mean = sum / grades.length

console.log(mean)