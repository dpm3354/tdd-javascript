const Dollar = require("./dollar").Dollar;

describe("Money Test Chapter 1", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            var dollar = new Dollar(5);
            dollar.times(2);
            expect(dollar.amount).toBe(10)
        });
    });
});
