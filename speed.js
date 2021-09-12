export let speed = 4
const INICIAL_SPEED = 4
const SPEED_INCREMENT = 1
const SNAKE_BODY_SIZE_TO_INCREMENT = 5

export function update(snakeLenght){
    let tax = snakeLenght/SNAKE_BODY_SIZE_TO_INCREMENT>>0
    speed = INICIAL_SPEED + tax * SPEED_INCREMENT
    console.log(snakeLenght)
    console.log(speed)
}