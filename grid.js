export const GRID_SIZE = 21

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGridMin(onePosition) {
  return (onePosition < 1)
}

export function outsideGridMax(onePosition) {
    return (onePosition > GRID_SIZE)
  }