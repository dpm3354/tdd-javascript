class Dollar {

    constructor(amount) {
        this.amount = amount
    }

    times(multiplier) {
        //this.amount = this.amount * multiplier;
        var dollar = Object.assign({}, this); // Needed to get a new memory object
        return new Dollar(dollar.amount * multiplier)
    }

    equals(dollar) {
        return dollar.amount === this.amount
    }
}

module.exports.Dollar = Dollar;
