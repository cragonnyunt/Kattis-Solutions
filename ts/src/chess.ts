import readline = require('readline')

interface Point {
  x: number
  y: number
}

function getMoves (p1: Point, p2: Point): (Point | null)[] {
  if (p1.x === p2.x && p1.y === p2.y) {
    return [p1]
  }
  if ((p1.x + p1.y + p2.x + p2.y) % 2 === 1) {
    return []
  }
  if (Math.abs(p1.x - p2.x) === Math.abs(p1.y - p2.y)) {
    return [p1, p2]
  }
  const d1 = getDiagonals(p1)
  const d2 = getDiagonals(p2)
  const intersection =
    d1.filter((p) => d2.some((p2) => p.x === p2.x && p.y === p2.y))[0] ?? null
  return [p1, intersection, p2]
}

function toPoint (str: string): Point {
  const [col, row] = str.split(' ')
  return {
    x: (col ?? '').charCodeAt(0) - 'A'.charCodeAt(0),
    y: 8 - Number(row)
  }
}

function toString (pt: Point | null): string {
  if (pt) {
    return `${String.fromCharCode(pt.x + 'A'.charCodeAt(0))} ${8 - pt.y}`
  }
  return ''
}

function getDiagonals (pt: Point): Point[] {
  const points: Point[] = []
  const matrix: [number, number][] = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  for (let lvl = 1; lvl <= 8; lvl++) {
    for (const [i, j] of matrix) {
      const x = pt.x + lvl * i
      const y = pt.y + lvl * j
      if (x >= 0 && x < 8 && y >= 0 && y < 8) {
        points.push({ x, y })
      }
    }
  }
  return points
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [L1, L2, L3, L4] = line.split(' ')
      const [P1, P2] = [toPoint(`${L1} ${L2}`), toPoint(`${L3} ${L4}`)]
      const pts = getMoves(P1, P2)
      if (pts.length === 0) {
        console.log('Impossible')
      } else {
        console.log(
          `${pts.length - 1} ${pts.map((pt) => toString(pt)).join(' ')}`
        )
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
