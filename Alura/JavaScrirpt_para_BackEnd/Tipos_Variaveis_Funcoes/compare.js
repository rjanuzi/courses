let n = 10;
let s = '10';

// == and != Compares with implicit type conversion
console.log(n == s); // true
console.log(n != s); // false

// === !== Compares the value and type without implicit type conversion
console.log(n === s); // false
console.log(n !== s); // true



// Boolean comparions
console.log(true || false)
console.log(true && false)

// Ternary operator
const minimumAge = 18;
let age = 15;

let ableToAccess = age >= minimumAge ? true : false;
console.log(ableToAccess);

age = 19
ableToAccess = age >= minimumAge ? true : false;
console.log(ableToAccess);