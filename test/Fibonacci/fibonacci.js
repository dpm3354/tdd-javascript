class Fibonacci {

    getIndex(index) {
        if (index === 0) {
            return 0;
        }
        if (index === 1) {
            return 1;
        }
        return this.getIndex(index - 1) + this.getIndex(index - 2)
    }
}

module.exports.Fibonacci = Fibonacci;
