const Dollar = require("./dollar").Dollar;
const Franc = require("./franc").Franc;

describe("Money Test Chapter 6", () => {
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
            product = five.times(3);
            expect(product.amount).toBe(15);
        });

        test('Test Equality for Franc', () => {
            expect(new Franc(5)).toStrictEqual(new Franc(5));
            expect(new Franc(5)).not.toStrictEqual(new Franc(6));
        });
    });
});

