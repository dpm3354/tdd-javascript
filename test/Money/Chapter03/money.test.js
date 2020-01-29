const Dollar = require("./dollar").Dollar;
var assert = require('assert');

describe("Money Test Chapter 3", () => {
    describe("Dollar Multiplier", () => {

        test('Test multiplication', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
        });

        test('Test multiplication 2', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(10, product.amount)
            product = five.times(3)
            assert.equal(15, product.amount)
        });

        test('Test Equality', () => {
            assert.equal(new Dollar(5).equals(new Dollar(5)), true);
            assert.equal(new Dollar(5).equals(new Dollar(6)), false);
        });

        test('Test Equality 2', () => {
            assert.deepEqual(new Dollar(5), new Dollar(5));
            assert.equal(new Dollar(5).equals(new Dollar(5)), true);
            assert.equal(new Dollar(5).equals(new Dollar(6)), false);
        });

    });
});
