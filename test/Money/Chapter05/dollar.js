const Money = require('./money');

class Dollar extends Money {

    constructor(amount) {
        super();
        this.amount = amount
    }

    times(multiplier) {
        //this.amount = this.amount * multiplier;
        return new Dollar(this.amount * multiplier);
    }
}

module.exports.Dollar = Dollar;
