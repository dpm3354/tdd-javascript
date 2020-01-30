const Dollar = require("./dollar").Dollar;

describe("Money Test Chapter 3", () => {
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

        test('Test Equality for Dollar', () => {
            expect(new Dollar(5)).toStrictEqual(new Dollar(5));
            expect(new Dollar(5)).not.toStrictEqual(new Dollar(6));
        });

        test('Test Equality 2', () => {
            expect(new Dollar(5)).toStrictEqual(new Dollar(5));
            expect(new Dollar(5)).toStrictEqual(new Dollar(5));
            expect(new Dollar(5)).not.toStrictEqual(new Dollar(6));
        });
    });
});
