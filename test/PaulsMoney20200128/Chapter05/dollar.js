class Dollar{

    constructor(amount){
        this.amount=amount;
    }

    times(multiple){
        return new Dollar(this.amount * multiple);
    }
}

module.exports.Dollar = Dollar;