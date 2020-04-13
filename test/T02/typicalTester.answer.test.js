//const Tester = require("./tester").tester;
var assert = require('assert');
var tester = require('./typicalTester.answer.js');



describe("Typical Tester Test", () => {
    describe("Tester contains correct properties", () => {
        test('Test name exists', () => {
            assert.ok(tester.Name, "this tester should have a name");
        });
        test('Test warm body', () => {
            assert.equal(tester.warmBody, true, "this tester should have a warm body");
        });
    });
});
