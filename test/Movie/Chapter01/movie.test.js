const Movie = require("./movie");

var starWars = new Movie("Star Wars");

describe("Movie Test", () => {
    describe("Ratings", () => {
        test('Test rating', () => {
            starWars.addRating(2);
            starWars.addRating(3);
            expect(starWars.getAverageRating()).toBe(3)
        });

        test('Test Lots of ratings', () => {
            starWars.addRating(1);
            starWars.addRating(5);
            starWars.addRating(1);
            starWars.addRating(2);
            expect(starWars.getAverageRating()).toBe(2);
        });
    });
});
