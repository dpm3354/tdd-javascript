class Palindrome {

    isPalindrome(string) {
        return string.charAt(0) == string.charAt(string.length - 1);
    }
}

module.exports = Palindrome;
