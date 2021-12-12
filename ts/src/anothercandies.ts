import readline = require('readline')

let lineCount = 0
let children = 0
let cases = 0
let candies = BigInt(0)

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line) => {
    if (lineCount > 0 && line.length !== 0) {
      if (cases === 0) {
        cases = children = parseInt(line)
      } else {
        candies += BigInt(line) % BigInt(children)
        candies %= BigInt(children)
        if (--cases === 0) {
          console.log(candies === BigInt(0) ? 'YES' : 'NO')
          children = 0
          candies = BigInt(0)
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
