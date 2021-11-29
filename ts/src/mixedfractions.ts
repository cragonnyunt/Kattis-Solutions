import readline = require('readline')

function extract (numerator: number, denominator: number): [number, number] {
  return [Math.floor(numerator / denominator), numerator % denominator]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0 0') {
      process.exit(0)
    }
    const [numerator, denominator] = line.split(' ').map(Number)
    console.log(
      `${extract(numerator ?? 0, denominator ?? 0).join(' ')} / ${denominator}`
    )
  })
  .on('close', () => {
    process.exit(0)
  })
