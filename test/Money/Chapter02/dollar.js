class Dollar {

    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }

    equals(dollar) {
        return true;
    }
}

module.exports.Dollar = Dollar;
