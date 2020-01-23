const Palindrome = require('./palindrome');
const assert = require('assert');

let palindrome;

describe("Palindrome", () => {

    describe("Test Palindrome", () => {
        test('Test simple palindrome', () => {
            assert.equal(new Palindrome().isPalindrome("a"), true);
        });

        test('Test aa', () => {
            assert.equal(new Palindrome().isPalindrome("aa"), true);
        });

        test('Test 11', () => {
            assert.equal(new Palindrome().isPalindrome("11"), true);
        });

        test('Test bab', () => {
            assert.equal(new Palindrome().isPalindrome("bab"), true);
        });

        test('Test ba', () => {
            assert.equal(new Palindrome().isPalindrome("ba"), false);
        });

    });
});
