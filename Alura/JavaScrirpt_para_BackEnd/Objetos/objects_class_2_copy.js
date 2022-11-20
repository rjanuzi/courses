const customer = {
    name: "John",
    age: 30,
    contact: {
        phone: "123-456-7890",
        email: "john@company.com"
    },
    balance: 200.0,
    checkBalance: (paymentAmount, balance) => {
        if (paymentAmount > balance) {
            return false;
        } else {
            return true;
        }
    },
    doPayment: function (amount) {
        if (this.checkBalance(paymentAmount = amount, balance = this.balance)) {
            this.balance -= amount;
            return true;
        } else {
            console.log("Insufficient funds");
            return false;
        }
    }
}

// Point to the same reference
let customer2 = customer;
customer2.doPayment(100);

// Affects both objects
console.log(customer.balance);
console.log(customer2.balance);

// Create a copy of the object
customer2 = Object.create(customer);
customer2.doPayment(29.99);

// Affects only the second object
console.log(customer.balance);
console.log(customer2.balance);