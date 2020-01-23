const Dollar = require("./dollar").Dollar;
var assert = require('assert');

describe("Money Test Chapter 1", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            var dollar = new Dollar(5);
            dollar.times(2);
            assert.equal(10, dollar.amount)
        });
    });
});
