const jsonFilePath = './class_4_customer.json';

const data = require(jsonFilePath);

console.log(data);

console.log(typeof data);
console.log(data.nome);

const customerJsonStr = JSON.stringify(data);

console.log(customerJsonStr);
console.log(typeof customerJsonStr);

const customerObjFromStr = JSON.parse(customerJsonStr);

console.log(customerObjFromStr);
console.log(typeof customerObjFromStr);