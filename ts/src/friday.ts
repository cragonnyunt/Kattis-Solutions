import readline = require('readline')

function getFriday13 (days: number[]): number {
  let friday13 = 0
  let start = 0
  for (const day of days) {
    const end = (start + day) % 7
    if (start === 0 && day >= 13) {
      friday13++
    }
    start = end
  }
  return friday13
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
        const days = line.split(' ').map(Number)
        console.log(getFriday13(days))
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
