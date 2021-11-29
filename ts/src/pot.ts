import readline = require('readline')

function formatText (num: number): void {
  const base = Math.floor(num / 10)
  const pow = num % 10
  sum += base ** pow
}

let lineCount = 0
let sum = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      formatText(parseInt(line))
    }
    lineCount++
  })
  .on('close', () => {
    console.log(sum)
    process.exit(0)
  })
