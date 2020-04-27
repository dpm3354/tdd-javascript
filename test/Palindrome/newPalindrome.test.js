const Palindrome = require('./newPalindrome');

describe("Palindrome", () => {

    describe("Test Palindrome", () => {
        //red, green, refactor

        test('single character is a palindrome', () => {
            expect(new Palindrome().isPalindrome("a")).toBe(true);
        });

        test('ab', () => {
            expect(new Palindrome().isPalindrome("ab")).toBe(false);
        });


        test('bobb', () => {
            expect(new Palindrome().isPalindrome("bobb")).toBe(false);
        });

        test('works with spaces bo b', () => {
            expect(new Palindrome().isPalindrome("bo b")).toBe(true);
        });
        
        test('works with more than one space b o  b', () => {
            expect(new Palindrome().isPalindrome("b o  b")).toBe(true);
        });

        test('works with punctuation bo,b', () => {
            expect(new Palindrome().isPalindrome("bo,b")).toBe(true);
        });

        test('works with more than one punctuation mark !bo,b', () => {
            expect(new Palindrome().isPalindrome("!bo,b")).toBe(true);
        });

        test('ignores case ', () => {
            expect(new Palindrome().isPalindrome("Bob")).toBe(true);
        });

        test('test letters with tildes/umlots', () => { 
            expect(new Palindrome().isPalindrome("niño on in")).toBe(true); 
        });

        test('test letters with pictograms', () => { 
            expect(new Palindrome().isPalindrome("文言文")).toBe(true); 
        });
               
        // test('test letters with unbalanced pictograms', () => { 
        //     expect(new Palindrome().isPalindrome("言文")).toBe(false); 
        // });
            //TODO we don't handle underscores properly   

    });
});
