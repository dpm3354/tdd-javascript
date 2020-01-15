const Fibonacci = require("./fibonacci").Fibonacci;
var assert = require('assert');

describe("Fibonacci", () => {
    describe("Returns Index", () => {

        it("Index 0 returns 0", () => {
            assert.equal(0, new Fibonacci().getIndex(0))
        });

        it("Index 1 returns 1", () => {
            assert.equal(1, new Fibonacci().getIndex(1))
        });

        it("Index 2 returns 1", () => {
            assert.equal(1, new Fibonacci().getIndex(2))
        });

        it("Index 3 returns 2", () => {
            assert.equal(2, new Fibonacci().getIndex(3))
        });

        it("Index 4 returns 3", () => {
            assert.equal(3, new Fibonacci().getIndex(4))
        });

        it("Index 5 returns 5", () => {
            assert.equal(5, new Fibonacci().getIndex(5))
        });

        it("Index 6 returns 8", () => {
            assert.equal(8, new Fibonacci().getIndex(6))
        });

        it("Index 7 returns 13", () => {
            assert.equal(13, new Fibonacci().getIndex(7))
        });

        it("Index 8 returns 21", () => {
            assert.equal(21, new Fibonacci().getIndex(8))
        });

        it("Index 9 returns 34", () => {
            assert.equal(34, new Fibonacci().getIndex(9))
        });

        it("Index 10 returns 55", () => {
            assert.equal(55, new Fibonacci().getIndex(10))
        });

        it("Index 11 returns 89", () => {
            assert.equal(89, new Fibonacci().getIndex(11))
        });

        it("Index 12 returns 144", () => {
            assert.equal(144, new Fibonacci().getIndex(12))
        });
    });
});
