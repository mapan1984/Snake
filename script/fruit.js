class Fruit {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    reBorn(xMax, yMax) {
        this.x = Math.floor(Math.random() * xMax)
        this.y = Math.floor(Math.random() * yMax)
        return this
    }
}
