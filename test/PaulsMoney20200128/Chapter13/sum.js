const Expression = require('./expression');
const Money = require('./money');

class Sum extends Expression{
    augend;
    addend;

    constructor(augend, addend){
        super();
        this.augend = augend;
        this.addend = addend;
    };

    reduce(to){
        console.log(this.augend);
        console.log(this.addend);

        var amount = augend.amount + addend.amount;
        return new Money(amount, to);
    }
}

module.exports = Sum;