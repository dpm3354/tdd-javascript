class Money {
    constructor(amount) {
        this.amount = amount;
    }

    equals(obj) {
        return obj.amount === this.amount
    }
}

module.exports = Money;
