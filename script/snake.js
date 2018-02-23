const DIR = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0],
}

class Snake {
    constructor(x, y) {
        this.body = [[x, y]]
        this.dir = DIR.right

        this.xMax = null
        this.yMax = null
        this.target = null
    }

    limitBoder(xMax, yMax) {
        this.xMax = xMax
        this.yMax = yMax
    }

    initTarget() {
        let [x, y] = this.body[0]
        this.target = new Fruit(
            (x + this.xMax) / 2,
            (y + this.yMax) / 2
        )
    }

    reset(x, y) {
        this.body = [[x, y]]
        this.dir = DIR.right
        this.initTarget()
    }

    hit(x, y) {
        for (let b of this.body) {
            if (x == b[0] && y == b[1]) {
                return true
            }
        }
        return false
    }

    changeDir(dir) {
        let newDir = DIR[dir]
        if (this.dir[0] != newDir[0] && this.dir[1] != newDir[1]) {
            this.dir = newDir
        }
    }

    changeTarget() {
        this.target = this.target.reBorn(this.xMax, this.yMax)
        while (this.hit(this.target.x, this.target.y)) {
            this.target = this.target.reBorn(this.xMax, this.yMax)
        }
    }

    moveTo(x, y) {
        if (this.hit(x, y)) {  // 碰撞身体，死亡
            alert('Snake Dead - Game Over')
            throw new Error('碰撞身体')
        } else {
            this.body.unshift([x, y])

            if (x == this.target.x && y == this.target.y) {
                // 吃到fruit，重新生成并更换target
                this.changeTarget()
            } else {
                this.body.pop()
            }
        }
    }

    move() {
        let [xHead, yHead] = this.body[0]
        let [xDir, yDir] = this.dir
        xHead = (xHead + xDir + this.xMax) % this.xMax
        yHead = (yHead + yDir + this.yMax) % this.yMax
        this.moveTo(xHead, yHead)
    }
}
