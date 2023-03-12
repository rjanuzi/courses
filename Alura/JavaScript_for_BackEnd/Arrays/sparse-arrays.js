let sparseArray = [1, 3, , 7, ,];

console.log(sparseArray.length); // 5 elements, but 3 values
console.log(sparseArray[2]); // undefined
console.log("Sparse Array:", sparseArray);

let emptyArray = [];
console.log(emptyArray.length); // 0 elements
console.log(emptyArray[0]); // undefined not error
console.log(emptyArray[100]); // undefined not error