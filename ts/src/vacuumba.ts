import readline = require('readline')

interface Direction {
  angle: number
  distance: number
}

interface Point {
  x: number
  y: number
}

function getLocation (segments: Direction[]): Point {
  const point = { x: 0, y: 0 }
  let dir = 90
  segments.forEach(segment => {
    dir += segment.angle
    const radianDir = getRadian(dir)

    point.x += segment.distance * Math.cos(radianDir)
    point.y += segment.distance * Math.sin(radianDir)
  })

  return point
}

function getRadian (degrees: number): number {
  return degrees * Math.PI / 180
}

function printLocation (segments: Direction[]): void {
  if (segments.length > 0) {
    const location = getLocation(segments)
    console.log(`${location.x.toFixed(6)} ${location.y.toFixed(6)}`)
  }
}

const digitsOnly = /^\d+$/
let segments: Direction[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (digitsOnly.test(line)) {
        printLocation(segments)
        segments = []
      } else {
        const [angle, distance] = line.split(' ').map(Number)
        segments.push({ angle: angle ?? 0, distance: distance ?? 0 })
      }
    }
    lineCount++
  })
  .on('close', () => {
    printLocation(segments)
    process.exit(0)
  })
