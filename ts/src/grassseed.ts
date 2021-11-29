import readline = require('readline')

let lineCount = 0
let cost: number
let totalCost = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      cost = parseFloat(line)
    } else if (lineCount > 1) {
      const [width, length] = line.split(' ').map(Number)
      totalCost += cost * (width ?? 0) * (length ?? 0)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(totalCost)
    process.exit(0)
  })
