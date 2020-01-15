const Dollar = require("./dollar").Dollar;
var assert = require('assert');

describe("Money Test", () => {
    describe("Dollar Multiplier", () => {
        it('Test multiplication', () => {
            var dollar = new Dollar(5);
            dollar.times(2);
            assert.equal(10, dollar.amount)
        });
    });
});
