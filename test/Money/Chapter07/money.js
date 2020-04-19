class Money {
    amount;

    equals(obj) {
        return (obj.amount === this.amount && this.constructor.name === obj.constructor.name)
    }
}

module.exports = Money;
