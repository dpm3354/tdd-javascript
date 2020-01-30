const Dollar = require("./dollar").Dollar;

describe("Money Test Chapter 2", () => {
    describe("Dollar Multiplier", () => {

        test('Test multiplication', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            expect(product.amount).toBe(10)
        });

        test('Test multiplication for Dollar', () => {
            var five = new Dollar(5);
            var product = five.times(2);
            expect(product.amount).toBe(10);
            product = five.times(3);
            expect(product.amount).toBe(15);
        });

        test('Two objects equal', () => {
            expect(new Dollar(5)).toStrictEqual(new Dollar(5));
        });
    });
});
