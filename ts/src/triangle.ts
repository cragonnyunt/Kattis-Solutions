import readline = require('readline')

function getTriangleCount (num: number) {
  return Math.ceil(num * Math.log10(1.5) + Math.log10(3))
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(`Case ${++lineCount}: ${getTriangleCount(parseInt(line))}`)
  })
  .on('close', () => {
    process.exit(0)
  })
