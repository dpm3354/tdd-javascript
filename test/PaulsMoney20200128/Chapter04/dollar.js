class Dollar{

    constructor(amount){
        this.amount=amount;
    }

    times(multiple){
        return new Dollar(this.amount * multiple);
    }

    equals(dollar){
        return dollar.amount == this.amount;
    }
}

module.exports.Dollar = Dollar;