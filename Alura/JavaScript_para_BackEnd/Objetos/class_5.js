const customers = require('./customers.json');

console.log(customers.length);

// Look for an object
function findInCustomers(customers, property, value) {
    return customers.find(customer => customer[property] === value);
}

// Find by name
let result = findInCustomers(customers, "nome", "Juliet");
console.log("\n\nLooking for Juliet:\n", result);

// find by email
result = findInCustomers(customers, "email", "bmccaughran5@blog.com");
console.log("\n\nLooking for bmccaughran5@blog.com:\n", result);

// Find customers that live in a appartment
function findCustomersInAppartment(customers) {
    return customers.filter(customer => customer.endereco.apartamento);
}

result = findCustomersInAppartment(customers);
console.log("\n\nCustomers that live in a appartment:\n", result);

// Find customer that live in a house
function findCustomersInHouse(customers) {
    return customers.filter(customer => !customer.endereco.apartamento);
}
result = findCustomersInHouse(customers);
console.log("\n\nCustomers that live in a house:\n", result);

// Find customers that live in appartments and don't have complementary info
function findAppartmentInconsitencies(customers) {
    return customers.filter(customer => {
        return customer.endereco.apartamento &&
            !customer.endereco.hasOwnProperty("complemento");
    });
}

result = findAppartmentInconsitencies(customers);
console.log("\n\nCustomers that live in a appartment and don't have complementary info:\n", result);