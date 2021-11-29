import readline = require('readline')

function check (board: boolean[][]): boolean {
  for (let i = 0; i < 8; i++) {
    let existedRow = false
    let existedCol = false

    for (let j = 0; j < 8; j++) {
      // Row Checking
      if ((board[i] ?? [])[j]) {
        if (!existedRow) {
          existedRow = true
        } else {
          return false
        }
      }
      // Column Checking
      if ((board[j] ?? [])[i]) {
        if (!existedCol) {
          existedCol = true
        } else {
          return false
        }
      }
    }
    if (!(existedRow && existedCol)) {
      return false
    }
  }

  for (let j = 0; j < 8; j++) {
    let existed1 = false
    let existed2 = false
    let existed3 = false
    let existed4 = false

    // Main Diagonal
    for (let i = 0; i < 8 - j; i++) {
      if ((board[i] ?? [])[i + j]) {
        if (!existed1) {
          existed1 = true
        } else {
          return false
        }
      }
      if ((board[i + j] ?? [])[i]) {
        if (!existed2) {
          existed2 = true
        } else {
          return false
        }
      }
    }

    // Other Diagonal
    for (let i = 0; i <= j; i++) {
      if ((board[i] ?? [])[j - i]) {
        if (!existed3) {
          existed3 = true
        } else {
          return false
        }
      }
      if ((board[7 - i] ?? [])[7 - (j - i)]) {
        if (!existed4) {
          existed4 = true
        } else {
          return false
        }
      }
    }
  }

  return true
}

const board: boolean[][] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    board.push(line.split('').map((x) => x === '*'))
  })
  .on('close', () => {
    console.log(check(board) ? 'valid' : 'invalid')
    process.exit(0)
  })
