import readline = require('readline')

function render (length: number, column: number, offset = 0): string {
  if (column === 0) {
    return '.'.repeat(length)
  }
  return [
    '.'.repeat(length - column - offset),
    '*'.repeat(column),
    '.'.repeat(offset)
  ].join('')
}

let offset = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line.length === 0) {
      offset = 0
    } else {
      const length = line.length
      const column = line.split('').filter((c) => c === '*').length
      console.log(render(length, column, offset))
      offset += column
    }
  })
  .on('close', () => {
    process.exit(0)
  })
