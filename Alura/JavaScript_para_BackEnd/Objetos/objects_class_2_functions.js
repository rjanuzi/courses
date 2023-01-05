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

console.log(customer);
customer.doPayment(50.5);
console.log(customer);
customer.doPayment(20.79);
console.log(customer);
customer.doPayment(200);
console.log(customer);