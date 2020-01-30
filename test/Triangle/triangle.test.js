const Triangle = require('./triangle');
const InvalidTriangleException = require('./invalidTriangleException');

const EQUILATERAL = 1;
const ISOSCELES = 2;
const SCALENE = 3;

describe("Triangle", () => {

    describe("Test Triangle", () => {

        test('Test', () => {
            let triangle = new Triangle(0, 0, 0);
            expect(() => triangle.getType()).toThrow(InvalidTriangleException)
        });

        test('Test Equilateral', () => {
            let triangle = new Triangle(1, 1, 1,);
            expect(triangle.getType()).toBe(EQUILATERAL)
        });

        test('Test Isosseles', () => {
            let triangle = new Triangle(1, 2, 2,);
            expect(triangle.getType()).toBe(ISOSCELES)
        });

        test('Test Scalene', () => {
            let triangle = new Triangle(1, 5, 3);
            expect(triangle.getType()).toBe(SCALENE)
        });

        test('Test Side Too Long', () => {
            let triangle = new Triangle(1, 2, 17);
            //expect(() => triangle.getType()).toThrow(InvalidTriangleException)  Make this test fail
        });

    });
});


