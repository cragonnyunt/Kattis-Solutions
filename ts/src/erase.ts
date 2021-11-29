import readline = require('readline')

function isErased (data: string): boolean {
  if (turn === 0) {
    return original === data
  } else {
    return (
      original ===
      data
        .split('')
        .map((c) => (c === '0' ? '1' : '0'))
        .join('')
    )
  }
}

let lineCount = 0
let turn: number
let original: string

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      turn = parseInt(line) % 2
    } else if (lineCount === 1) {
      original = line
    } else if (lineCount === 2) {
      if (isErased(line)) {
        console.log('Deletion succeeded')
      } else {
        console.log('Deletion failed')
      }
      process.exit(0)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
