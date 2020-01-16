class Money {
    amount;

    equals(obj) {
        return obj.amount === this.amount
    }
}

module.exports = Money;
