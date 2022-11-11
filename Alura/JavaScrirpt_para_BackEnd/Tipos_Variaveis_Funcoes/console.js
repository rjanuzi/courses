// Console.log add messages e values to the log register, normally showing in the stdout (standar output)
// Documentation: https://developer.mozilla.org/pt-BR/docs/Web/API/Console

let boolVar = false;

console.log("Hello World");
console.log("Hello", "World");
console.log(123.2);
console.log(boolVar);

// We have variations for specific messages (to organization purposes)
// In the terminal of the VSCode nothing is different, but in the Browser's console, the messages are different
console.info("This is an information message");
console.warn("This is a warning message");
console.error("This is an error message");

// This way we see different anywere
console.error(new Error("deu erro")); // Same as Error("deu erro")

// Console.table shows data in a table format
console.table([[1, 'a'], [2, 'b'], [3, 'c']]);

// Console.time and Console.timeEnd are used to measure the time between the two commands
console.time("Simple for loop");
for (let i = 0; i < 1000000; i++) {
    // Do nothing
}
console.timeEnd("Simple for loop");

// console.trace shows the stack trace of the current function
function bar() {
    console.trace("Trace of bar function");
}
function foo() {
    bar();
}
foo();