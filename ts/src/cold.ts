import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 === 1) {
      console.log(
        line
          .split(' ')
          .map(Number)
          .filter((x) => x < 0).length
      )
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
