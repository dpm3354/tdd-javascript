const Dollar = require("./dollar").Dollar;
var assert = require('assert');

describe("Money Test Chapter 2", () => {
    describe("Dollar Multiplier", () => {

        it('Test multiplication', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
        });

        it('Test multiplication 2', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
            product = five.times(3)
            assert.equal(15, product.amount)
        });

        it('Two objects equal', () => {
            assert.equal(true, new Dollar(5).equals(new Dollar(5)))
        });
    });
});
