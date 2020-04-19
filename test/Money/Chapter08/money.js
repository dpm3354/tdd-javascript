class Money {
    amount;

    equals(obj) {
        return (obj.amount === this.amount && this.constructor.name === obj.constructor.name)
    }


    times(multiplier) {  // As close to abstract as we can get in javascript
        throw new Error("Times method must be implemented in the child class.")
    }

    static toDollar(amount) {
        return new Dollar(5);
    }
}

module.exports = Money;
