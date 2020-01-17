const Triangle = require('./triangle');
const InvalidTriangleException = require('./invalidTriangleException');
const assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const EQUILATERAL = 1;
const ISOSCELES = 2;
const SCALENE = 3;

describe("Triangle", () => {

    describe("Test Triangle", () => {

        it('Test', () => {
            let triangle = new Triangle(0, 0, 0);
            expect(() => triangle.getType()).to.throw(InvalidTriangleException)
        });
    });
});


