const Fibonacci = require("./fibonacci").Fibonacci;

describe("Fibonacci", () => {
    describe("Returns Index", () => {

        test("Index 0 returns 0", () => {
            expect(new Fibonacci().getIndex(0)).toBe(0);
        });

        test("Index 1 returns 1", () => {
            expect(new Fibonacci().getIndex(1)).toBe(1);
        });

        test("Index 2 returns 1", () => {
            expect(new Fibonacci().getIndex(2)).toBe(1);
        });

        test("Index 3 returns 2", () => {
            expect(new Fibonacci().getIndex(3)).toBe(2);
        });

        test("Index 4 returns 3", () => {
            expect(new Fibonacci().getIndex(4)).toBe(3);
        });

        test("Index 5 returns 5", () => {
            expect(new Fibonacci().getIndex(5)).toBe(5);
        });

        test("Index 6 returns 8", () => {
            expect(new Fibonacci().getIndex(6)).toBe(8);
        });

        test("Index 7 returns 13", () => {
            expect(new Fibonacci().getIndex(7)).toBe(13);
        });

        test("Index 8 returns 21", () => {
            expect(new Fibonacci().getIndex(8)).toBe(21);
        });

        test("Index 9 returns 34", () => {
            expect(new Fibonacci().getIndex(9)).toBe(34);
        });

        test("Index 10 returns 55", () => {
            expect(new Fibonacci().getIndex(10)).toBe(55);
        });

        test("Index 11 returns 89", () => {
            expect(new Fibonacci().getIndex(11)).toBe(89);
        });

        test("Index 12 returns 144", () => {
            expect(new Fibonacci().getIndex(12)).toBe(144);
        });
    });
});
