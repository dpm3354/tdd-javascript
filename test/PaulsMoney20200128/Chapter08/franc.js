const Money = require('./money');

class Franc extends Money{

    constructor(amount){
        super(amount);
    }

    times(multiple){
        return new Franc(this.amount * multiple);
    }
}

module.exports.Franc = Franc;