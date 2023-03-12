// JavaScript Object
const personObj = {
    name: "Rafa", // Object properties
    age: 31,
    cpf: "123.456.789-00",
    email: "rjanuzi@gmail.com"
}

console.log(personObj.name);
console.log(personObj.age);
console.log(personObj["cpf"]); // Different way to access the property
console.log(personObj["email"]);
console.log(personObj.noField); // undefined

console.log(`\nThe customer name is ${personObj.name} and he is ${personObj.age} years old.`);

// console.log(`\nThe first tree numbers of the CPF are ${personObj.cpf.slice(0, 3)}`); // Using slice (arrays)
console.log(`\nThe first tree numbers of the CPF are ${personObj.cpf.substring(0, 3)}`);

// Changing value of properties
personObj.name = "Rafael Barbosa Januzi";
console.log(`\nThe customer name is ${personObj.name} and he is ${personObj.age} years old.`);

// We also can create new properties this way
personObj.phone = "11 99999-9999";
console.log(personObj);

// Removing attributies
personObj.fldToDelete = "This field will be deleted";
console.log(personObj);
delete personObj.fldToDelete;
console.log(personObj);