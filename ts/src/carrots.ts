import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      console.log(line.split(' ')[1])
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
