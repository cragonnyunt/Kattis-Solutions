import readline = require('readline')

function getPrefixLength (str: string): number {
  for (let i = 1; i < str.length; i++) {
    if (str.startsWith(str.substr(i))) {
      return i
    }
  }
  return str.length
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(getPrefixLength(line))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
