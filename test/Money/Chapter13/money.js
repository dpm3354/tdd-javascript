const Expression = require("./Expression");
const Sum = require("./sum");

class Money extends Expression {
    amount;
    currency;

    constructor(amount, currency) {
        super();
        this.amount = amount;
        this.currency = currency;
    }

    equals(obj) {
        return (obj.amount === this.amount && obj.currency === this.currency)
    }

    static dollar(amount) {
        return new Money(amount, "USD")
    }

    static franc(amount) {
        return new Money(amount, "CHF")
    }

    times(multiplier) {
        var money = Object.assign({}, this); // Needed to get a new memory object
        return new Money(money.amount * multiplier, this.currency)
    }

    getCurrency() {
        return this.currency;
    }

    toString() {
        return this.amount + " " + this.currency;
    }

    plus(addEnd) {
        return new Sum(this, addEnd);
    }

    reduce(multiplier) {
        return this;
    }
}

module.exports = Money;
