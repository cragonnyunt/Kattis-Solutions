import readline = require('readline')

function getImportedTurtles (turtles: number[]): number {
  let imported = 0
  for (let i = 1; i < turtles.length; i++) {
    imported += Math.max((turtles[i] ?? 0) - (turtles[i - 1] ?? 0) * 2, 0)
  }
  return imported
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const turtles = line.split(' ').map(Number)
      turtles.pop()
      console.log(getImportedTurtles(turtles))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
