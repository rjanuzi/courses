function soma(a, b) {
    return a + b;
}

// Missing params return NaN
console.log(soma(2));

// Functions with default values
function soma2(a = 100, b = 5) {
    return a + b;
}

console.log(soma2());
console.log(soma2(3))
console.log(soma2(3, 4))

// Using params names to pass values to the function
console.log(soma2(b = 10))

// If no param is passed and the functions needed, it will return undefined
function test(a) {
    console.log(a);
}

test();
console.log(test());