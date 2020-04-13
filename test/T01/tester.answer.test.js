// Runs best with "runTestsByPath" option. ex: jest --runTestsByPath ./tester.answer.test.js
var assert = require('assert');
var tester = require('./tester.answer.js');


function isJsonString (jsonString){
    try {
        var o = JSON.parse(jsonString);

        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
};

// Two things that
describe("Tester Test", () => {
    describe("JSON", () => {
        test('Test JSON is syntactically correct', () => {
            assert.ok(isJsonString(JSON.stringify(tester)), "syntax is not correct");
        });
    });
    describe("Tester contains correct properties", () => {
        test('Test name exists', () => {
            assert.ok(tester.Name, "this tester should have a name");
        });
        test('Test warm body', () => {
            assert.equal(tester.warmBody, true, "this tester should have a warm body");
        });
    });
});
