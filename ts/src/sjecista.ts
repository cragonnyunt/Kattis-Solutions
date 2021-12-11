import readline = require('readline')

function getIntersectionPoints (points: number): number {
  return (points * (points - 1) * (points - 2) * (points - 3)) / 24
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getIntersectionPoints(parseInt(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
