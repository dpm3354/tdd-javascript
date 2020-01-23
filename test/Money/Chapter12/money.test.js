const Money = require("./money");
const Bank = require("./Bank");
var assert = require('assert');

describe("Money Test Chapter 12", () => {
    describe("Currency", () => {

        test('Test multiplication for Dollar', () => {
            let five = Money.dollar(5);
            assert.deepEqual(Money.dollar(10), five.times(2));
            assert.deepEqual(Money.dollar(15), five.times(3));
        });

        test('Test Equality', () => {
            assert.equal(Money.dollar(5).equals(Money.dollar(5)), true);
            assert.equal(Money.dollar(5).equals(Money.dollar(6)), false);
            assert.equal(Money.franc(5).equals(Money.franc(5)), true);
            assert.equal(Money.franc(5).equals(Money.franc(6)), false);
            assert.equal(Money.franc(5).equals(Money.dollar(5)), false);

        });

        test('Test multiplication for Franc', () => {
            let five = Money.franc(5);
            assert.deepEqual(Money.franc(10), five.times(2));
            assert.deepEqual(Money.franc(15), five.times(3));
        });

        test('Test Equality for Franc', () => {
            assert.equal(Money.franc(5).equals(Money.franc(5)), true);
            assert.equal(Money.franc(5).equals(Money.franc(6)), false);
        });

        test('Test Equality for mixed currency', () => {
            assert.equal(Money.dollar(5).equals(Money.franc(5)), false);
        });

        test('Test Currency', () => {
            assert.equal("USD", Money.dollar(1).currency)
            assert.equal("CHF", Money.franc(1).currency)
        });

        test('Test Simple Addition', () => {
            let five = Money.dollar(5);
            let sum = five.plus(five);
            let bank = new Bank();
            assert.deepEqual(Money.dollar(10), bank.reduce(sum, "USD"))
        });

    });
});

