import readline = require('readline')

type Vector = number[]

function minimumScalarProduct (v1: Vector, v2: Vector): number {
  v1 = v1.sort((a, b) => a - b)
  v2 = v2.sort((a, b) => b - a)
  return v1.reduce((acc, cur, i) => acc + cur * (v2[i] ?? 0), 0)
}

let lineCount = 0
let v1: Vector = []
let v2: Vector = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 1) {
      if ((lineCount + 1) % 3 === 0) {
        v1 = line.split(' ').map(Number)
      } else if (lineCount % 3 === 0) {
        v2 = line.split(' ').map(Number)
        console.log(`Case #${lineCount / 3}: ${minimumScalarProduct(v1, v2)}`)
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
