import readline = require('readline')

function getFinalPoint (input: string[]) {
  const p = new Point(parseFloat(input[0] ?? '0'), parseFloat(input[1] ?? '0'))
  for (let i = 2; i < input.length; i += 2) {
    const value = parseFloat(input[i + 1] ?? '0')
    switch (input[i]) {
      case 'start':
      case 'turn':
        p.turn(value)
        break
      default:
        p.walk(value)
        break
    }
  }
  return p
}

class Point {
  private degree: number

  constructor (public x = 0, public y = 0) {
    this.degree = 0
    this.x = x
    this.y = y
  }

  turn (degrees: number) {
    this.degree += degrees
  }

  walk (distance: number) {
    this.x += Math.cos((this.degree * Math.PI) / 180) * distance
    this.y += Math.sin((this.degree * Math.PI) / 180) * distance
  }

  static averagePoint (points: Point[]) {
    const sumPoint = points.reduce((p1, p2) => {
      return new Point(p1.x + p2.x, p1.y + p2.y)
    }, new Point(0, 0))
    return new Point(sumPoint.x / points.length, sumPoint.y / points.length)
  }

  static getDistance (p1: Point, p2: Point) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
  }

  static worstDistance (points: Point[], point: Point) {
    return Math.max(
      ...points.map((p) => {
        return Point.getDistance(p, point)
      })
    )
  }
}
const regNumbersOnly = /^\d+$/
let dirs = 0
let finalPoints: Point[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line) => {
    if (regNumbersOnly.test(line)) {
      if (finalPoints.length > 0) {
        const averagePoint = Point.averagePoint(finalPoints)
        const worstDistance = Point.worstDistance(finalPoints, averagePoint)
        console.log(`${averagePoint.x.toFixed(4)} ${averagePoint.y.toFixed(4)} ${worstDistance.toFixed(4)}`)
        finalPoints = []
      }
      dirs = parseInt(line)
      if (dirs === 0) {
        process.exit(0)
      }
    } else {
      const point = getFinalPoint(line.split(' '))
      finalPoints.push(point)
    }
  })
  .on('close', () => {
    process.exit(0)
  })
