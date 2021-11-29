import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [r1, s] = line.split(' ').map(Number)
    r1 ??= 0
    s ??= 0
    console.log(2 * s - r1)
  })
  .on('close', () => {
    process.exit(0)
  })
