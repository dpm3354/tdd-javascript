const Expression = require("./expression");
const Sum = require("./sum");


class Money extends Expression{

    amount; 
    currency;

    constructor(amount, currency){
        super();
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

    plus(addend){
        return new Sum(this, addend);
    }

}

module.exports = Money;