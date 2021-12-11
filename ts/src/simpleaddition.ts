import readline = require('readline')

let num1: bigint
let num2: bigint
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      num1 = BigInt(line)
    } else {
      num2 = BigInt(line)
      console.log((num1 + num2).toString())
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
