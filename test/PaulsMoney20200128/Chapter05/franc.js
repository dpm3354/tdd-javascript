class Franc{

    constructor(amount){
        this.amount=amount;
    }

    times(multiple){
        return new Franc(this.amount * multiple);
    }
}

module.exports.Franc = Franc;