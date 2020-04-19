const Money = require("./money");
const Bank = require("./bank");
let assert = require('assert');

describe("Money Test Chapter 12", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            let five = Money.dollar(5);
            expect(five.times(2).equals(Money.dollar(10))).toBe(true);
            expect(five.times(3).equals(Money.dollar(15))).toBe(true);
        });
    });

    // the first three are learning tests for me. How does JS handle equality without an equals() function?
    describe("Dollar Equality", () => {

        test('Test identify', () => {
            let five = Money.dollar(5);
            let anotherFive = five;
            expect(five.equals(anotherFive)).toBe(true);         
        });

        test('Test equality', () => {
            let five1 = Money.dollar(5);
            let five2 = Money.dollar(5);
            expect(five1.equals(five2)).toBe(true);         
        });

        test('Test nonequality', () => {
            let four = Money.dollar(4);
            let five = Money.dollar(5);
            expect(four.equals(five)).toBeFalsy();         
        });
    });

    describe("Cross type equality", () => {
        test('Test Francs are not equal to Dollars', () => {
            let dollar = Money.dollar(5);
            let franc = Money.franc(5);
            expect(dollar.equals(franc)).toBeFalsy();
        });
    });

    describe("Franc Multiplier", () => {
        test('Test multiplication', () => {
            let five = Money.franc(5);
            assert.equal(five.amount, 5);
            // removed product - refactoring test to remove unneeded temp letiable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(2), Money.franc(10), "$5 x 2 should equal $10");
            // removed product - refactoring test to remove unneeded temp letiable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(3), Money.franc(15), "$5 x 3 should equal $15");
        });        
    });

    // the first three are learning tests for me. How does JS handle equality without an equals() function?
    describe("Franc Equality", () => {
        test('Test deep equality', () => {
            let five1 = Money.franc(5);
            let five2 = Money.franc(5);
            assert.deepEqual(five1, five2, "$5 should equal $5");
        });

        test('Test deep equality when amount leties', () => {
            let five = Money.franc(5);
            let four = Money.franc(4);
            assert.notDeepEqual(five, four, "$5 should not equal $4");
        });

        test('Test equality', () => {
            let five1 = Money.franc(5);
            let five2 = Money.franc(5);
            assert.notEqual(five1, five2, "five1 should not equal five2");
        });

        test('Test no equality', () => {
            let four = Money.franc(4);
            let five = Money.franc(5);
            assert.notEqual(four, five, "four should not equal five");
        });
    });

    describe("Currency", () => {
        test('Test currency', () => {
            let dollar = Money.dollar(5);
            expect(dollar.getCurrency()).toBe("USD");
            let franc = Money.franc(5);
            expect(franc.getCurrency()).toBe("CHF");
        });        
    });


    describe("Test Addition", () => {
        test('Test simple addition', () => {
            let five = Money.dollar(5);
            let sum = five.plus(five);
            let bank = new Bank();
            let reduced = bank.reduce(sum, "USD");
            expect(reduced).toEqual(Money.dollar(10));
        });
    });



});