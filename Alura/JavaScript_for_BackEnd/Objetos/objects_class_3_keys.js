const customer = {
    name: "John",
    age: 30,
    contact: {
        phone: "123-456-7890",
        email: "john@company.com"
    },
    sampleFun: stub => {
        console.log(stub);
    }
}

customer.addresses = [
    {
        street: "123 Main St",
        number: 123,
        city: "New York",
        state: "NY",
        zip: "10001",
        isAppartment: false
    }
]

// The order of the keys is not guaranteed
let customerKeys = Object.keys(customer);
console.log(customerKeys);

console.log(customerKeys.includes("name"));
console.log(customerKeys.includes("blablabla"));

// Other fields
console.log(Object.entries(customer));
console.log(Object.values(customer));
