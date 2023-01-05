const customer = {
    name: "John",
    age: 30,
    contact: {
        phones: ["123-456-7890", "123-456-7891"],
        email: "john@company.com"
    },
    sampleFun: stub => {
        console.log(stub);
    }
}

customer.addresse = {
    street: "123 Main St",
    number: 123,
    city: "New York",
    state: "NY",
    zip: "10001",
    isAppartment: false
}

function callCustomer(phone1, phone2) {
    console.log(`Calling ${phone1}...`);
    console.log(`Calling ${phone2}...`);
}

callCustomer(...customer.contact.phones);

const shipment = {
    customer: customer.name,
    ...customer.addresse, // Spread operaton can be used on object also
}

console.log(shipment);

// Warning: The spread operator will overwrite values for properties with the same name
const obj1 = {
    name: "John",
    age: 30,
}

const obj2 = {
    name: "Jane",
    age: 25,
}

const obj3 = {
    ...obj1,
    ...obj2,
}

console.log(obj3);