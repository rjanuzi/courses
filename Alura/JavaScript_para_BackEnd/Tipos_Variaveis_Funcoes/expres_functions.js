// Other to define a function (Expression Function)
const soma = function (a, b) {
    return a + b;
}
console.log(soma(2, 3));

// Expression functions can't be defined before the call (this is called hoisting)
soma2(3, 5); // Thows an error
const soma2 = function (a, b) {
    return a + b;
}