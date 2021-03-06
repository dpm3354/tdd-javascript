const Money = require('./money');

class Franc extends Money {

    constructor(amount) {
        super();
        this.amount = amount
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }
}

module.exports.Franc = Franc;
