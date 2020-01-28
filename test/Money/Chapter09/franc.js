const Money = require('./money');

class Franc extends Money {

    constructor(amount) {
        super();
        this.amount = amount;
        this.currency = "CHF"
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }
}

module.exports = Franc;
