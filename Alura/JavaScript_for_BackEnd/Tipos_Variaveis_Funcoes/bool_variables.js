// Boolean
const loggedIn = true;
const payedAccount = false;

// Truthy and Falsy
// Aren't boolean, but feel like it
// 0 => false
// 1 => true
console.log("0 == false: " + (0 == false));
console.log("1 == true: " + (1 == true));
console.log("2 == false: " + (2 == false)) // Only works for 0 and 1
console.log("2 == true: " + (2 == true)); // Only works for 0 and 1

// Empty strings are also falsy
console.log("'' == true: " + ("" == true))
console.log("'' == false: " + ("" == false))
console.log("'a' == true: " + ("a" == true))
console.log("'a' == false: " + ("a" == false))

// null ==> The value is empty, but is defined
const empty = null;

// undefined ==> The value is not defined (not even empty)
const notDefined = undefined;

console.log("empty == notDefined: " + (empty == notDefined)); // Although different meaning, they are equal
console.log("empty == false: " + (empty == false));
console.log("empty == true: " + (empty == true));
console.log("notDefined == false: " + (notDefined == false));
console.log("notDefined == true: " + (notDefined == true));

// Check variable type
let n = 1;
let s = "1";
let b = true;

console.log("typeof number: " + typeof n);
console.log("typeof string: " + typeof s);
console.log("typeof boolean: " + typeof b);
console.log("typeof null: " + typeof null); // ATTENTION: null is an object
console.log("typeof undefined: " + typeof undefined);