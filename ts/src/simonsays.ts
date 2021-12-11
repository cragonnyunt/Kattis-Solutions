import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (line.startsWith('Simon says ')) {
        console.log(line.substring(11))
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
