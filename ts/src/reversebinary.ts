import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const binary = parseInt(line).toString(2)
    console.log(parseInt(binary.split('').reverse().join(''), 2))
  })
  .on('close', () => {
    process.exit(0)
  })
