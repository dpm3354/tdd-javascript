class Movie {
    ratingList = [];

    constructor(title) {

    }

    getAverageRating() {
        let sum = 0;

        this.ratingList.forEach(rating => {
            sum += rating;
        });
        return Math.round(sum / this.ratingList.length);  // Math.round needed to make an int
    }

    addRating(i) {
        this.ratingList.push(i);
    }
}

module.exports = Movie;
