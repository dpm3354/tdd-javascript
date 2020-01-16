const Dollar = require("./dollar").Dollar;
const Franc = require("./franc").Franc;
var assert = require('assert');

describe("Money Test Chapter 5", () => {
    describe("Multiplier", () => {

        it('Test multiplication for Dollar', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
            product = five.times(3)
            assert.equal(15, product.amount)
        });

        it('Test Equality', () => {
            assert.equal(new Dollar(5).equals(new Dollar(5)), true);
            assert.equal(new Dollar(5).equals(new Dollar(6)), false);
        });

        it('Test multiplication for Franc', () => {
            let five = new Franc(5);
            let product = five.times(2);
            assert.equal(10, product.amount)
            product = five.times(3)
            assert.equal(15, product.amount)
        });

    });
});

