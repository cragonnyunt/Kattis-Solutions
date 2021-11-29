import readline = require('readline')

enum Direction {
  Left,
  Up,
  Right,
  Down
}

function transpose (tiles: number[][], direction: number): number[][] {
  const result: number[][] = []
  switch (direction) {
    case Direction.Left:
      for (let row = 0; row < tiles.length; row++) {
        result.push(tiles[row] ?? [])
      }
      break
    case Direction.Up: {
      for (let col = 3; col >= 0; col--) {
        result.push(tiles.map((row) => row[col] ?? 0))
      }
      break
    }
    case Direction.Right:
      for (let row = 0; row < 4; row++) {
        result.push((tiles[row] ?? []).reverse())
      }
      break
    case Direction.Down: {
      for (let col = 0; col < 4; col++) {
        result.push(tiles.map((row) => row[col] ?? 0).reverse())
      }
      break
    }
  }
  return result
}

// To Left
function mergeTiles (tiles: number[]): number[] {
  const result = tiles.filter((tile) => tile !== 0)
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1]) {
      result[i] *= 2
      result[++i] = 0
    }
  }
  return result
    .filter((tile) => tile !== 0)
    .concat(Array(4).fill(0))
    .slice(0, 4)
}

function printTiles (tiles: number[][]): void {
  tiles.forEach((row) => {
    console.log(row.join(' '))
  })
}

function getReverseDirection (direction: number): number {
  switch (direction) {
    case Direction.Up:
      return Direction.Down
    case Direction.Down:
      return Direction.Up
    default:
      // No need to reverse for left/right moves
      return direction
  }
}

let lineCount = 0
const tiles: number[][] = []
let dir: number

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount < 4) {
      tiles[lineCount] = line.split(' ').map(Number)
      lineCount++
    } else {
      dir = parseInt(line)
    }
  })
  .on('close', () => {
    const movedTiles = transpose(tiles, dir).map(mergeTiles)
    printTiles(transpose(movedTiles, getReverseDirection(dir)))
    process.exit(0)
  })
