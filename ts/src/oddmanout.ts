import readline = require('readline')

function oddOnes (n: number[]): number[] {
  return n.filter(x => count(n, x) % 2 === 1)
}

function count (n: number[], num: number): number {
  return n.filter(x => x === num).length
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (lineCount % 2 === 0) {
        console.log(`Case #${lineCount / 2}: ${oddOnes(line.split(' ').map(Number)).join(' ')}`)
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
