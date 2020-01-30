const Money = require("./money");

describe("Money Test Chapter 11", () => {
    describe("Currency", () => {

        test('Test multiplication for Dollar', () => {
            var five = Money.dollar(5);
            expect(Money.dollar(10)).toStrictEqual(five.times(2));
            expect(Money.dollar(15)).toStrictEqual(five.times(3));
        });

        test('Test Equality', () => {
            expect(Money.dollar(5)).toStrictEqual(Money.dollar(5));
            expect(Money.dollar(5)).not.toStrictEqual(Money.dollar(6));
            expect(Money.franc(5)).toStrictEqual(Money.franc(5));
            expect(Money.franc(5)).not.toStrictEqual(Money.franc(6));
            expect(Money.franc(5)).not.toStrictEqual(Money.dollar(5));

        });

        test('Test multiplication for Franc', () => {
            var five = Money.franc(5);
            expect(Money.franc(10)).toStrictEqual(five.times(2));
            expect(Money.franc(15)).toStrictEqual(five.times(3));
        });

        test('Test Equality for Franc', () => {
            expect(Money.franc(5)).toStrictEqual(Money.franc(5));
            expect(Money.franc(5)).not.toStrictEqual(Money.franc(6));
        });

        test('Test Equality for mixed currency', () => {
            expect(Money.dollar(5)).not.toStrictEqual(Money.franc(5));
        });

        test('Test Currency', () => {
            expect(Money.dollar(1).currency).toStrictEqual("USD");
            expect(Money.franc(1).currency).toStrictEqual("CHF");
        });

    });
});

