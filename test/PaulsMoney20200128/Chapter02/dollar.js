class Dollar{

    constructor(amount){
        this.amount=amount;
    }

    times(multiple){
        this.amount *= multiple;
    }
}

module.exports.Dollar = Dollar;