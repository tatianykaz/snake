import { update as updateSnake, draw as drawSnake, getSnakeLenght, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { update as updateSpeed, speed} from './speed.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let pauseValue = false

function main(currentTime) {
  if (gameOver) {
    if (confirm('GAME OVER. Press OK to restart.')) {
      window.location = '/'
    }
    return
  }
  window.requestAnimationFrame(main)

  if (pauseValue === false){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / speed) return

    lastRenderTime = currentTime

    update()
    draw()
  }
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
  updateSpeed(getSnakeLenght())
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = snakeIntersection()
}

document.getElementById("pause")
  .addEventListener("click", function(){
    pauseValue = !pauseValue 
  }, false);
