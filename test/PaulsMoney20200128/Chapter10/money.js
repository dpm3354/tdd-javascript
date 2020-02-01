class Money{
    amount; 
    currency;
    constructor(amount, currency){
        this.amount=amount;
        this.currency = currency;
    }
    equals(money){
        return money.amount == this.amount && money.getCurrency() == this.getCurrency();//money.constructor.name == this.constructor.name;
    }
    getCurrency(){
        return this.currency;
    }

    static franc(amount) {
        return new Money(amount, "CHF")
    }

    static dollar(amount) {
        return new Money(amount, "USD")
    }

    times(multiple){
        return new Money(this.amount * multiple, this.currency);
    }

}

module.exports = Money;