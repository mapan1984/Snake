class Game {
    constructor() {
        this.fps = 10
        this.runing = false
        this.actions = {}

        this.dungeon = new Dungeon(450, 450, 10, '#dungeon')

        this.snake = new Snake(7, 7)
        this.snake.limitBoder(this.dungeon.xMax, this.dungeon.yMax)
        this.snake.initTarget()

        this.draw()
    }

    // 注册按键key与之触发的事件action
    registerAction(key, action) {
        this.actions[key] = action
    }

    // 开始监听按键，并处理与之对应的事件
    listen() {
        window.addEventListener('keydown', (event) => {
            let key = event.key
            let action = this.actions[event.key]
            action && action()
        })
    }

    update() {
        this.snake.move()
    }

    draw() {
        this.dungeon.clean()
        this.dungeon.showSnake(this.snake)
        this.dungeon.showFruit(this.snake.target)
    }

    start() {
        if (!this.runing) {
            this.runing = true
            this.interval = setInterval(() => {
                try {
                    this.update()
                    this.draw()
                } catch(e) { // 死亡
                    this.snake.reset(7, 7)
                    clearInterval(this.interval)
                    this.runing = false
                }
            }, 1000/this.fps)
        }
    }
}
