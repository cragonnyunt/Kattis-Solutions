import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const times = parseInt(line)
    for (let i = 0; i < times; i++) {
      console.log(`${i + 1} Abracadabra`)
    }
  })
  .on('close', () => {
    process.exit(0)
  })
