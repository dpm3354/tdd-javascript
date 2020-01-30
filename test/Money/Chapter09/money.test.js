const Dollar = require("./dollar");
const Franc = require("./franc");

describe("Money Test Chapter 9", () => {
    describe("Multiplier", () => {

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

        test('Test multiplication for Franc', () => {
            let five = new Franc(5);
            let product = five.times(2);
            expect(product.amount).toBe(10);
            product = five.times(3)
            expect(product.amount).toBe(15)
        });

        test('Test Equality for Franc', () => {
            expect(new Franc(5)).toStrictEqual(new Franc(5));
            expect(new Franc(5)).not.toStrictEqual(new Franc(6));
        });

        test('Test Equality for mixed currency', () => {
            expect(new Dollar(5)).not.toStrictEqual(new Franc(5));
        });

        test('Test Currency', () => {
            expect(new Dollar(1).currency).toBe("USD");
            expect(new Franc(1).currency).toBe("CHF");
        });

    });
});

