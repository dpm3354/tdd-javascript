const Dollar = require("./dollar");
const Franc = require("./franc");
var assert = require('assert');

describe("Money Test Chapter 9", () => {
    describe("Multiplier", () => {

        it('Test multiplication for Dollar', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
            product = five.times(3)
            assert.equal(15, product.amount)
        });

        it('Test Equality for Dollar', () => {
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

        it('Test Equality for Franc', () => {
            assert.equal(new Franc(5).equals(new Franc(5)), true);
            assert.equal(new Franc(5).equals(new Franc(6)), false);
        });

        it('Test Equality for mixed currency', () => {
            assert.equal(new Dollar(5).equals(new Franc(5)), false);
        });

        it('Test Currency', () => {
            assert.equal("USD", new Dollar(1).currency)
            assert.equal("CHF", new Franc(1).currency)
        });

    });
});

