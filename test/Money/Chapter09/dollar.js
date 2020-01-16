const Money = require('./money');

class Dollar extends Money {

    constructor(amount) {
        super();
        this.amount = amount;
        this.currency = "USD"
    }

    times(multiplier) {
        //this.amount = this.amount * multiplier;
        var dollar = Object.assign({}, this); // Needed to get a new memory object
        return new Dollar(dollar.amount * multiplier)
    }
}

module.exports = Dollar;
