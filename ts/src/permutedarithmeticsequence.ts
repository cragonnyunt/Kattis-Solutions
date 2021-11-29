import readline = require('readline')

function getElement (list: number[], index: number): number {
  return list[index] ?? 0
}

function isArithmetic (list: number[]): boolean {
  for (let i = 1; i < list.length - 1; i++) {
    if (
      getElement(list, i) - getElement(list, i + 1) !==
      getElement(list, i - 1) - getElement(list, i)
    ) {
      return false
    }
  }
  return true
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const list = line.split(' ').map(Number)
      list.shift()
      if (isArithmetic(list)) {
        console.log('arithmetic')
      } else if (isArithmetic(list.sort((a, b) => a - b))) {
        console.log('permuted arithmetic')
      } else {
        console.log('non-arithmetic')
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
