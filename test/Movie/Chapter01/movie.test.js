const Movie = require("./movie");
var assert = require('assert');

var starWars = new Movie("Star Wars");

describe("Movie Test", () => {
    describe("Ratings", () => {
        test('Test rating', () => {
            starWars.addRating(2);
            starWars.addRating(3);
            assert.equal(3, starWars.getAverageRating(), "Bad average rating.")
        });

        test('Test Lots of ratings', () => {
            starWars.addRating(1);
            starWars.addRating(5);
            starWars.addRating(1);
            starWars.addRating(2);
            assert.equal(2, starWars.getAverageRating(), "Bad average rating.")
        });
    });
});
