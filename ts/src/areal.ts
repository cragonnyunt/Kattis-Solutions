import readline = require('readline')

function getFence (area: number): number {
  return 4 * Math.sqrt(area)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getFence(parseFloat(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
