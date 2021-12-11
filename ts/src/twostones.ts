import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const stones = parseInt(line)
    console.log(stones % 2 === 0 ? 'Bob' : 'Alice')
  })
  .on('close', () => {
    process.exit(0)
  })
