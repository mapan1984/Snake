class Fruit {
    constructor() {
        this.x = 15
        this.y = 15
    }

    reBorn(xMax, yMax) {
        this.x = Math.floor(Math.random() * xMax)
        this.y = Math.floor(Math.random() * yMax)
        return this
    }
}