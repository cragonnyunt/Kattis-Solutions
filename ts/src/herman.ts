import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const radius = parseInt(line)
    console.log(`${radius * radius * Math.PI} ${radius * radius * 2}`)
  })
  .on('close', () => {
    process.exit(0)
  })
