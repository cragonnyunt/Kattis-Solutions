import readline = require('readline')

function getMaxDiscount (prices: number[]): number {
  prices.sort((a, b) => b - a)
  let discount = 0
  for (let i = 2; i < prices.length; i += 3) {
    discount += (prices[i] ?? 0)
  }
  return discount
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(getMaxDiscount(line.split(' ').map(Number)))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
