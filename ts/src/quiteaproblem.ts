import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(line.toLowerCase().includes('problem') ? 'yes' : 'no')
  })
  .on('close', () => {
    process.exit(0)
  })
