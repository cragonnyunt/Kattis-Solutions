import readline = require('readline')

function encrypt (message: string): string {
  const matrix = fillInMatrix(message)
  return rotateMatrix(matrix)
    .reduce((acc, row) => acc.concat(row.filter((c) => c !== '*')), [])
    .join('')
}

function fillInMatrix (message: string): string[][] {
  const matrixLength = Math.ceil(Math.sqrt(message.length))
  const matrix: string[][] = []
  for (let i = 0; i < message.length; i += matrixLength) {
    const row = message.slice(i, i + matrixLength).split('')
    if (row.length < matrixLength) {
      row.push(...Array(matrixLength - row.length).fill('*'))
    }
    matrix.push(row)
  }
  return matrix
}

function rotateMatrix (matrix: string[][]): string[][] {
  matrix.reverse()

  const matrixLength = matrix.length
  const rotatedMatrix: string[][] = []
  for (let i = 0; i < matrixLength; i++) {
    rotatedMatrix.push(matrix.map((row) => row[i] ?? ''))
  }
  return rotatedMatrix
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(encrypt(line))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
