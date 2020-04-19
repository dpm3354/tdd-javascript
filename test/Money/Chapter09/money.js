//const Franc = require("./franc");

class Money {

    amount;
    currency;

    equals(obj) {
        return (obj.amount === this.amount && this.constructor.name === obj.constructor.name)
    }


    times(multiplier) {  // As close to abstract as we can get in javascript
        throw new Error("Times method must be implemented in the child class.")
    }

    current() {
        return this.currency;
    }
}

module.exports = Money;
