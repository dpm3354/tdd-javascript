const Bank = require("./bank");
const Sum = require("./sum");
const Money = require("./money");

describe("Bank Test Chapter 13", () => {
    describe("Reduce", () => {
        test('Test reduce', () => {
            let sum = new Sum(Money.dollar(3), Money.dollar(4));
            let bank = new Bank();
            let result = bank.reduce(sum, "USD");
            expect(Money.dollar(7)).toEqual(result);
        });
    });
});