import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const num = parseInt(line)
      if (Math.abs(num) % 2 === 0) {
        console.log(`${num} is even`)
      } else {
        console.log(`${num} is odd`)
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
