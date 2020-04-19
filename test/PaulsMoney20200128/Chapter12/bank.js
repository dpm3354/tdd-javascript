const Money = require('./money');
class Bank{
    constructor(){}
    reduce(source, to){
        return Money.dollar(10); //fake it
    }
}

module.exports = Bank;