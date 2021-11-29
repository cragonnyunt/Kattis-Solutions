import readline = require('readline')

type Matrix = [[number, number], [number, number]]

function getDet (matrix: Matrix): number {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
}

function inverseMatrix (matrix: Matrix): Matrix {
  const det = getDet(matrix)
  const inv: Matrix = [
    [matrix[1][1], -matrix[0][1]],
    [-matrix[1][0], matrix[0][0]]
  ]
  return [
    [inv[0][0] / det, inv[0][1] / det],
    [inv[1][0] / det, inv[1][1] / det]
  ]
}

function printMatrix (matrix: Matrix): void {
  console.log(`${matrix[0][0]} ${matrix[0][1]}`)
  console.log(`${matrix[1][0]} ${matrix[1][1]}`)
}

let lineCount = 0
const matrix: Matrix = [
  [0, 0],
  [0, 0]
]

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 3 === 0) {
      const [a, b] = line.split(' ').map(Number)
      matrix[0] = [a ?? 0, b ?? 0]
    } else if (lineCount % 3 === 1) {
      const [c, d] = line.split(' ').map(Number)
      matrix[1] = [c ?? 0, d ?? 0]
    } else {
      const caseNo = (lineCount + 1) / 3
      console.log(`Case ${caseNo}:`)
      printMatrix(inverseMatrix(matrix))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
