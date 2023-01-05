const customer = {
    name: "John",
    age: 30,
    contact: {
        phone: "123-456-7890",
        email: "john@company.com"
    },
    balance: 1000.0,
    paymentHistory: [],
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
            this.paymentHistory.push({
                amount: amount,
                date: new Date()
            })
            return true;
        } else {
            console.log("Insufficient funds");
            return false;
        }
    }
}

customer.doPayment(19.99);
customer.doPayment(29.99);
customer.doPayment(39.99);
customer.doPayment(49.99);
customer.doPayment(59.99);
customer.doPayment(69.99);
customer.doPayment(79.99);
customer.doPayment(89.99);
customer.doPayment(99.99);
console.log(customer.paymentHistory);

let relevantPayments = customer.paymentHistory.filter(payment => payment.amount > 30.0);
console.log(relevantPayments);