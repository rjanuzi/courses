const customers = require("./customers.json");

// 1. Sort customers by name
customers.sort((customerA, customerB) => customerA.nome < customerB.nome ? -1 : 1);
console.log(customers[0]);
console.log(customers[2]);
console.log(customers[customers.length - 2]);
console.log(customers[customers.length - 1]);