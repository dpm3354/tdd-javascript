class Expression {

    reduce(multiplier) {  // As close to abstract as we can get in javascript
        throw new Error("Times method must be implemented in the child class.")
    }
}

module.exports = Expression;
