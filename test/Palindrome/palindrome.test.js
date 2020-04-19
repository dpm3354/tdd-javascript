const Palindrome = require('./palindrome');

describe("Palindrome", () => {

    describe("Test Palindrome", () => {
        test('Test simple palindrome', () => {
            expect(new Palindrome().isPalindrome("a")).toBe(true);
        });

        test('Test aa', () => {
            expect(new Palindrome().isPalindrome("aa")).toBe(true);
        });

        test('Test 11', () => {
            expect(new Palindrome().isPalindrome("11")).toBe(true);
        });

        test('Test bab', () => {
            expect(new Palindrome().isPalindrome("bab")).toBe(true);
        });

        test('Test ba', () => {
            expect(new Palindrome().isPalindrome("ba")).toBe(false);
        });

    });
});
