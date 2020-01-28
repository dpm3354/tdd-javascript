const Dollar = require("./dollar").Dollar;
var assert = require('assert');



describe("Money Test Chapter 2", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            assert.equal(product.amount, 10, "$5 x 2 should equal $10");
            var product = five.times(3);
            assert.equal(product.amount, 15, "$5 x 3 should equal $15");
        });
    });
});