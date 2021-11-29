import readline = require('readline')

interface Point {
  x: number
  y: number
}

type PointList = [Point, Point, Point, Point]

function getFourthPoint (points: PointList): Point {
  if (
    getDistanceSquare(points[0], points[1]) ===
    getDistanceSquare(points[1], points[2]) +
      getDistanceSquare(points[2], points[0])
  ) {
    return {
      x: points[0].x + points[1].x - points[2].x,
      y: points[0].y + points[1].y - points[2].y
    }
  } else if (
    getDistanceSquare(points[1], points[2]) ===
    getDistanceSquare(points[2], points[0]) +
      getDistanceSquare(points[0], points[1])
  ) {
    return {
      x: -points[0].x + points[1].x + points[2].x,
      y: -points[0].y + points[1].y + points[2].y
    }
  } else {
    return {
      x: points[0].x - points[1].x + points[2].x,
      y: points[0].y - points[1].y + points[2].y
    }
  }
}

function getDistanceSquare (p1: Point, p2: Point): number {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
}

const points: Point[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [x, y] = line.split(' ').map(Number)
    points.push({ x: x ?? 0, y: y ?? 0 })
  })
  .on('close', () => {
    const pt = getFourthPoint(points as PointList)
    console.log(`${pt.x} ${pt.y}`)
    process.exit(0)
  })
