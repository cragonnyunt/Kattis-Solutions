import readline = require('readline')

const modulo: Set<number> = new Set()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const num = parseInt(line)
    modulo.add(num % 42)
  })
  .on('close', () => {
    console.log(modulo.size)
    process.exit(0)
  })
