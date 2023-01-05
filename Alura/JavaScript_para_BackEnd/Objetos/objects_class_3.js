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

// Attention to the syntax. Is not for...of from arrays
for (let key in customer) {
    let val = customer[key];
    let valueType = typeof val;

    if (valueType === "object") {
        for (let key2 in val) {
            console.log(key2, val[key2])
        }
    } else if (valueType !== "function") {
        console.log(`${key} = ${customer[key]}`);
    }
}