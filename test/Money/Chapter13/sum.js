const Expression = require("./expression");
const Money = require("./money");

class Sum extends Expression {
    addend;
    augend;

    constructor(augend, addend) {
        super();
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to) {
        console.log(to);
        let amount = this.addend.amount + this.augend.amount;
        return new Money(amount, to);
    }
}

module.exports = Sum;
