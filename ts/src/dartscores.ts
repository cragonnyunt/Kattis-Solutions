import readline = require('readline')

interface Point {
  x: number
  y: number
}

function calculateScore (): number {
  let score = 0
  for (const point of points) {
    const distance = Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2))
    if (distance > 200) {
      continue
    }
    let p = 10
    for (const c of circle) {
      if (distance <= c) {
        break
      }
      p--
    }
    score += p
  }
  return score
}

let lineCount = 0
let points: Point[] = []
const numberRegExp = /^[0-9]+$/
const circle = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (numberRegExp.test(line)) {
        if (points.length > 0) {
          console.log(calculateScore())
        }
        points = []
      } else {
        const [x, y] = line.split(' ').map(Number)
        points.push({ x: x ?? 0, y: y ?? 0 })
      }
    }
    lineCount++
  })
  .on('close', () => {
    if (points.length > 0) {
      console.log(calculateScore())
    }
    process.exit(0)
  })
