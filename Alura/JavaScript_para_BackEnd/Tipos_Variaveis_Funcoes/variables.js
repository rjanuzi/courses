// var: First one created, can be used in any place of code and is global
var height = 5;
var width = 7;

// We don't need to declare varible when we assign value to it.
// But is a good practive to do so.
area = height * width;
console.log(area);

// We can declare the variable after the usage also
var area;
console.log(area);

// Let: Created after var, can be used only in the scope where it is created
let form = 'rectangle';
let height2 = 5;
let width2 = 7;

let area2 = height2 * width2;
console.log(area2);

// With let we can't declare the variable after the usage
// area3 = height2 * width2;
// console.log(area3);
// let area3; // Generates error

if (form === 'rectangle') {
    let area3 = height2 * width2;
    var global_area = height2 * width2;
} else {
    // Triangle
    let area3 = (height2 * width2) / 2;
    var global_area = height2 * width2;
}

// let declarations only exists inside the scope
// console.log(area3); // Generates error
console.log("Global " + global_area);

// Const: The assigned value can't be changed
const height3 = 5;
const width3 = 7;
const area4 = height3 * width3;

console.log(area4);
// area4 = 10; // Generates error

// We need to ensure that consts have a value
// const empty_const; // Generates error

if (form === 'rectangle') {
    // Rectangle
    const area5 = height3 * width3;
} else {
    // Triangle
    const area5 = (height3 * width3) / 2;
}

// Only exists inside the scope
// console.log(area5); // Generates error

// Is recommended to use only const and let, and avoid var