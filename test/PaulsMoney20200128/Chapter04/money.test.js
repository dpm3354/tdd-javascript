const Dollar = require("./dollar").Dollar;
var assert = require('assert');

describe("Money Test Chapter 4", () => {
    describe("Dollar Multiplier", () => {
        test('Test multiplication', () => {
            var five = new Dollar(5);
            assert.equal(five.amount, 5);
            // removed product - refactoring test to remove unneeded temp variable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(2), new Dollar(10), "$5 x 2 should equal $10");
            // removed product - refactoring test to remove unneeded temp variable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(3), new Dollar(15), "$5 x 3 should equal $15");
        });    
    });

    // the first three are learning tests for me. How does JS handle equality without an equals() function?
    describe("Dollar Equality", () => {
        test('Test identify', () => {
            var five = new Dollar(5);
            var anotherFive = five;
            expect(five.equals(anotherFive)).toBe(true);         
        });

        test('Test equality', () => {
            var five1 = new Dollar(5);
            var five2 = new Dollar(5);
            expect(five1.equals(five2)).toBe(true);         
        });

        test('Test equality', () => {
            var four = new Dollar(4);
            var five = new Dollar(5);
            expect(four.equals(five)).toBeFalsy();         
        });
    });
});