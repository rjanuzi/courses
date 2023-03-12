const text1 = "Hello World!";
const text2 = 'Hello World 2!';
const text3 = 'This a "citation"';
const text4 = "This is also a 'citation'";

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);

// Template Literals (Template Strings)
const text5 = `Multi line
string using Template Strings`;

console.log(text5);

const number = 10.3;

const text6 = `The number is ${number}`;

console.log(text6);

const concatenated_string = text1 + " " + text2 + " | " + number;

console.log(concatenated_string);

// Special UNICODE chars
//https://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://home.unicode.org/
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const hearth = '\u2665'
const star = '\u2605'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(hearth)
console.log(star)

// Some built-in operations
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const text7 = "Hello World!";
const text8 = "hello world!";

console.log(text7 === text8);
console.log(text7.toLowerCase() === text8.toLowerCase());
console.log(text7.length);
console.log(text7.charAt(6));
console.log(text7[8]);

// Primitive vs Object
const text9 = "Hello World!";
const text10 = new String("Hello World!");

console.log(text9);
console.log(text10);

const text11 = "2 + 3";
const text12 = new String("2 + 3");

console.log(eval(text11));
console.log(eval(text12));

