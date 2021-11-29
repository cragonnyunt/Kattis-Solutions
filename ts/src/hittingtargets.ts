import readline = require('readline')

interface Point {
  x: number
  y: number
}

interface Shape {
  isInside(pt: Point): boolean
}

class Circle implements Shape {
  // eslint-disable-next-line no-useless-constructor
  constructor (public center: Point, public radius: number) {}

  isInside (pt: Point): boolean {
    return (
      Math.pow(pt.x - this.center.x, 2) + Math.pow(pt.y - this.center.y, 2) <=
      Math.pow(this.radius, 2)
    )
  }
}

class Rectangle implements Shape {
  // eslint-disable-next-line no-useless-constructor
  constructor (public topLeft: Point, public bottomRight: Point) {}

  isInside (pt: Point): boolean {
    return (
      pt.x >= this.topLeft.x &&
      pt.x <= this.bottomRight.x &&
      pt.y >= this.topLeft.y &&
      pt.y <= this.bottomRight.y
    )
  }
}

let lineCount = 0
let targetCount = 0
const targets: Shape[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      targetCount = parseInt(line)
    } else if (lineCount <= targetCount) {
      const lineArray = line.split(' ')
      targets.push(
        lineArray[0] === 'circle'
          ? new Circle(
            {
              x: parseInt(lineArray[1] ?? '0'),
              y: parseInt(lineArray[2] ?? '0')
            },
            parseInt(lineArray[3] ?? '0')
          )
          : new Rectangle(
            {
              x: parseInt(lineArray[1] ?? '0'),
              y: parseInt(lineArray[2] ?? '0')
            },
            {
              x: parseInt(lineArray[3] ?? '0'),
              y: parseInt(lineArray[4] ?? '0')
            }
          )
      )
    } else {
      if (!Number(line)) {
        const [x, y] = line.split(' ').map(Number)
        const pt: Point = { x: x ?? 0, y: y ?? 0 }
        console.log(`${targets.filter(target => target.isInside(pt)).length}`)
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
