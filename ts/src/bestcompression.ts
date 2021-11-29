import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [files, bits] = line.split(' ').map(Number)
    console.log((files ?? 0) <= 2 ** ((bits ?? 0) + 1) - 1 ? 'yes' : 'no')
  })
  .on('close', () => {
    process.exit(0)
  })
