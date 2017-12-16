(function main() {
    let game = new Game()

    game.registerAction('a', () => {
        game.snake.changeDir('left')
    })
    game.registerAction('w', () => {
        game.snake.changeDir('up')
    })
    game.registerAction('s', () => {
        game.snake.changeDir('down')
    })
    game.registerAction('d', () => {
        game.snake.changeDir('right')
    })

    // 按空格开始
    game.registerAction(' ', game.start.bind(game))

    game.listen()
})()
