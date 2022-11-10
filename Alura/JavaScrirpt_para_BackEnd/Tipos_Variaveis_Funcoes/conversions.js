// Implicit conversions

const num = 123;
const numStr = "123";

console.log("123 === '123': " + (num === numStr)); // false - Test the value and type
console.log("123 == '123': " + (num == numStr)); // true - Test the value only

// Explicit conversions
console.log("123 + '123': " + (num + numStr)); // 123123
console.log("123 + Number('123'): " + (num + Number(numStr))); // 246

// Invalid number parse generate NaN and not and error
console.log("Number('a231'): " + Number("a231"))