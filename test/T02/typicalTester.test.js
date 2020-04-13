var assert = require('assert');
var tester = require('./typicalTester.js');


// Two things that
describe("Typical Tester Test", () => {
    describe("Tester qualities", () => {
        test('Tester should have a name', () => {
            assert.ok(tester.Name, "Tester should have a name");
        });
    });
});
