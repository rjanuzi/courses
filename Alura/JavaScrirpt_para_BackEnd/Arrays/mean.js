const grades = [10, 6.5, 8, 7.5]

// Simple access
let sum = (grades[0] + grades[1] + grades[2] + grades[3])
let mean = sum / grades.length
console.log(mean)

// Using reduce
sum = grades.reduce((a, b) => a + b)
console.log(mean)

// Arrays in JS can mix types
const mixed = [10, 'Hello', true, 3.14, null, { name: 'John' }]
console.log(mixed);
