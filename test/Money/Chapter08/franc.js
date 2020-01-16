const Money = require('./money');

class Franc extends Money {

    constructor(amount) {
        super();
        this.amount = amount
    }

    times(multiplier) {
        //this.amount = this.amount * multiplier;
        var franc = Object.assign({}, this); // Needed to get a new memory object
        return new Franc(franc.amount * multiplier)
    }
}

module.exports.Franc = Franc;
