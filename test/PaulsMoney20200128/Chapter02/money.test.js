const Dollar = require("./dollar").Dollar;
var assert = require('assert');



describe("Money Test Chapter 1", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            var five = new Dollar(5);
            five.times(2);
            assert.equal(five.amount, 10, "$5 x 2 should equal $10");
        });
    });
});