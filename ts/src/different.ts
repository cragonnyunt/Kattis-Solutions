import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [a, b] = line.split(' ').map(Number)
    a ??= 0
    b ??= 0

    console.log(Math.abs(a - b))
  })
  .on('close', () => {
    process.exit(0)
  })
