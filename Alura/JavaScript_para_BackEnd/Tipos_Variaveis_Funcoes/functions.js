function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(10, 5));

// Functions without return, returns undefined (take care)
function noReturningFunction() {
    const result = 10 + 2;
}

console.log(noReturningFunction());

// Late defined functions
// Functions can be defined after they are called
console.log(soma2(7, 3));

function soma2(a, b) {
    return a + b;
}

// Math functions
console.log(Math.random());
console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.round(3.5));
console.log(Math.trunc(3.9));
console.log(Math.sqrt(9));
console.log(Math.pow(2, 15));
console.log(Math.max(1, 20, 3, -2, 5));
console.log(Math.min(1, 20, 3, -2, 5));