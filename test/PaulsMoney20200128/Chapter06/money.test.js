const Dollar = require("./dollar").Dollar;
const Franc = require("./franc").Franc;
var assert = require('assert');



describe("Money Test Chapter 6", () => {
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
        test('Test deep equality', () => {
            var five1 = new Dollar(5);
            var five2 = new Dollar(5);
            assert.deepEqual(five1, five2, "$5 should equal $5");
        });

        test('Test deep equality when amount varies', () => {
            var five = new Dollar(5);
            var four = new Dollar(4);
            assert.notDeepEqual(five, four, "$5 should not equal $4");
        });

        test('Test equality', () => {
            var five1 = new Dollar(5);
            var five2 = new Dollar(5);
            assert.notEqual(five1, five2, "five1 should not equal five2");
        });

        test('Test equality', () => {
            var four = new Dollar(4);
            var five = new Dollar(5);
            assert.notEqual(four, five, "four should not equal five");
        });
    });

    describe("Franc Multiplier", () => {
        test('Test multiplication', () => {
            var five = new Franc(5);
            assert.equal(five.amount, 5);
            // removed product - refactoring test to remove unneeded temp variable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(2), new Franc(10), "$5 x 2 should equal $10");
            // removed product - refactoring test to remove unneeded temp variable
            // change to using deep equal and compare objects
            assert.deepEqual(five.times(3), new Franc(15), "$5 x 3 should equal $15");
        });        
    });

    // the first three are learning tests for me. How does JS handle equality without an equals() function?
    describe("Franc Equality", () => {
        test('Test deep equality', () => {
            var five1 = new Franc(5);
            var five2 = new Franc(5);
            assert.deepEqual(five1, five2, "$5 should equal $5");
        });

        test('Test deep equality when amount varies', () => {
            var five = new Franc(5);
            var four = new Franc(4);
            assert.notDeepEqual(five, four, "$5 should not equal $4");
        });

        test('Test equality', () => {
            var five1 = new Franc(5);
            var five2 = new Franc(5);
            assert.notEqual(five1, five2, "five1 should not equal five2");
        });

        test('Test equality', () => {
            var four = new Franc(4);
            var five = new Franc(5);
            assert.notEqual(four, five, "four should not equal five");
        });


    });

});