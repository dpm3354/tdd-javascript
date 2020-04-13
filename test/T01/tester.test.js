var assert = require('assert');
var tester = require('./tester.js');


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
});
