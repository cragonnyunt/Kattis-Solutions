import readline = require('readline')

const customers: number[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      customers.push(parseInt(line))
    }
    lineCount++
  })
  .on('close', () => {
    console.log(
      customers
        .sort((a, b) => b - a)
        .reduce((acum, curr, index) => {
          return acum + ((index + 1) % 3 !== 0 ? curr : 0)
        })
    )
    process.exit(0)
  })
