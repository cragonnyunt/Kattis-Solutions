import readline = require('readline')

function outputSpread (sum: number, difference: number): number[] {
  return [(sum + difference) / 2, (sum - difference) / 2]
}

function invalidate (sum: number, difference: number): boolean {
  return sum < difference || sum % 2 !== difference % 2
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [sum, difference] = line.split(' ').map(Number)
      if (invalidate(sum ?? 0, difference ?? 0)) {
        console.log('impossible')
      } else {
        console.log(...outputSpread(sum ?? 0, difference ?? 0))
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
