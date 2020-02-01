class Money{
    amount;
    constructor(amount){
        this.amount=amount;
    }
    equals(money){
        return money.amount == this.amount && money.constructor.name == this.constructor.name;
    }
    getCurrency(){
        return this.currency;
    }
}

module.exports = Money;