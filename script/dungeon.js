class Dungeon {
    constructor() {
        this.width = 450
        this.height = 450
        this.gridSize = 10
        this.xMax = this.width / this.gridSize
        this.yMax = this.height / this.gridSize
        this.context = document.querySelector('#map').getContext('2d')
    }

    clean() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    showSnake(snake) {
        // 蛇头
        this.context.fillStyle = "#18ca53"
        let [x, y] = snake.body[0]
        this.context.fillRect(
            x*this.gridSize,
            y*this.gridSize,
            this.gridSize,
            this.gridSize
        )
        // 蛇身
        this.context.fillStyle = "#12610f"
        for (let s of snake.body.slice(1)) {
            let [x, y] = s
            this.context.fillRect(
                x*this.gridSize,
                y*this.gridSize,
                this.gridSize,
                this.gridSize
            )
        }
    }

    showFruit(fruit) {
        this.context.beginPath()
        let radius = this.gridSize / 2
        let x = fruit.x * this.gridSize + radius
        let y = fruit.y * this.gridSize + radius
        this.context.arc(x, y, radius, 0, Math.PI*2)
        this.context.fillStyle = "#FFA500"
        this.context.fill()
    }
}
