import readline = require('readline')

interface Point {
  x: number
  y: number
}

function calculate (point1: Point, point2: Point, p: number): number {
  const xNorm = Math.pow(getXDiff(point1, point2), p)
  const yNorm = Math.pow(getYDiff(point1, point2), p)
  return Math.pow(xNorm + yNorm, 1 / p)
}

function getXDiff (point1: Point, point2: Point): number {
  return Math.abs(point1.x - point2.x)
}

function getYDiff (point1: Point, point2: Point): number {
  return Math.abs(point1.y - point2.y)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0') {
      process.exit(0)
    }
    const [x1, y1, x2, y2, p] = line.split(' ').map(Number)
    const point1: Point = { x: x1 ?? 0, y: y1 ?? 0 }
    const point2: Point = { x: x2 ?? 0, y: y2 ?? 0 }
    console.log(calculate(point1, point2, p ?? 0))
  })
  .on('close', () => {
    process.exit(0)
  })
