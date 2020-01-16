class Dollar {

    constructor() {
    }

    times(multiplier) {
        //this.amount = this.amount * multiplier;
        var dollar = Object.assign({}, this); // Needed to get a new memory object
        return new Dollar(dollar.amount * multiplier)
    }

    equals(dollar) {
        return dollar.amount === amount
    }
}

module.exports.Dollar = Dollar;
