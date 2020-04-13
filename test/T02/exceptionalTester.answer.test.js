//const Tester = require("./tester").tester;
var assert = require('assert');
var tester = require('./exceptionalTester.answer.js');


// Two things that
describe("Exceptional Tester Test", () => {

    describe("Tester contains correct properties", () => {
        test('Test name exists', () => {
            assert.ok(tester.Name, "this tester should have a name");
        });
        test('Test Detail-oriented', () => {
            assert.equal(tester.DetailOriented, "true");
        });
        test('Test Amature Psychologist', () => {
            assert.equal(tester.amaturePsychologist, "true");
        });
        // ... many more should be here. What are yours?
    });
});
