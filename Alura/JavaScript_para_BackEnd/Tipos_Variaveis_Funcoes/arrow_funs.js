function show(text) {
    return `This is the text: ${text}`;
}

console.log(show('Hello World!'));

// Arrow functions
const show2 = (text, text2) => `This is the text: ${text} | This is the text2: ${text2}`;
console.log(show2('Hello World!', 'Hello World 2!'));

// Multi-lines arrow functions
const show3 = (text, text2) => {
    text = text.toUpperCase();
    text2 = text2.toUpperCase();
    return `This is the text: ${text} | This is the text2: ${text2}`;
}
console.log(show3('Hello World!', 'Hello World 2!'));