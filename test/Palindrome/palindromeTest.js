const Palindrome = require('./palindrome');
const assert = require('assert');

let palindrome;

describe("Palindrome", () => {

    before(function () {
        palindrome = new Palindrome();
    });

    describe("Test Palindrome", () => {
        it('Test simple palindrome', () => {
            assert.equal(palindrome.isPalindrome("a"), true);
        });

        it('Test aa', () => {
            assert.equal(palindrome.isPalindrome("aa"), true);
        });

        it('Test 11', () => {
            assert.equal(palindrome.isPalindrome("11"), true);
        });

        it('Test bab', () => {
            assert.equal(palindrome.isPalindrome("bab"), true);
        });

        it('Test ba', () => {
            assert.equal(palindrome.isPalindrome("ba"), false);
        });

    });
});
