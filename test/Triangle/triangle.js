const InvalidTriangleException = require('./invalidTriangleException');

class Triangle {
    a;
    b;
    c;

    constructor(sideA, sideB, sideC) {
        this.a = sideA;
        this.b = sideB;
        this.c = sideC;
    }

    getType() {
        if (this.a === 0 || this.b === 0 || this.c === 0) {
            throw new InvalidTriangleException();
        } else if (this.findBadTriangle()) {
        } else if (this.a === this.b && this.b === this.c)
            return 1;
        else if (this.a !== this.b && this.b !== this.c)
            return 3;
        else
            return 2;
    }

    findBadTriangle() {
        return false;
    }
}

module.exports = Triangle;
