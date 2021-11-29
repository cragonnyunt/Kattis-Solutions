import readline = require('readline')

interface Point {
  x: number
  y: number
}

function getDistanceSqrt (p1: Point, p2: Point) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
}

function isLighted (): boolean {
  for (const candle of candles) {
    if (getDistanceSqrt(candle, book) <= 64) {
      return true
    }
  }
  return false
}

function output (): void {
  if (candleCount === 0) {
    console.log(isLighted() ? 'light a candle' : 'curse the darkness')
    candleCount = -3
    candles = []
  }
}

let lineCount = 0
let candleCount = -3
let book: Point
let candles: Point[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (candleCount === -3) {
        const [x, y] = line.split(' ').map(Number)
        book = { x: x ?? 0, y: y ?? 0 }
        candleCount = -2
      } else if (candleCount === -2) {
        candleCount = parseInt(line)
        output()
        candles = []
      } else {
        const [x, y] = line.split(' ').map(Number)
        candles.push({ x: x ?? 0, y: y ?? 0 })
        candleCount--
        output()
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
