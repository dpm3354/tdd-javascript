
class Palindrome {

    isPalindrome(string) {
        string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        string = string.replace(/[^a-zA-Z0-9]+/g,"");
        string = string.toLowerCase();
        

        return string.split("").reverse().join("") === string;
        
    }
}

module.exports = Palindrome;