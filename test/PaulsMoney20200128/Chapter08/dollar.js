const Money = require('./money');

class Dollar extends Money{
    
    constructor(amount){
        super(amount);
    }

    times(multiple){
        return new Dollar(this.amount * multiple);
    }
}

module.exports.Dollar = Dollar;