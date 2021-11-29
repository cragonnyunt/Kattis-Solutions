import readline = require('readline')

function generate (): void {
  for (let n = 1; n <= 10000; n++) {
    let x = 0
    for (let y = 1; y <= n; y++) {
      if ((n * n) % y === 0) {
        x++
      }
    }
    pairs.push(x)
  }
}

const pairs: number[] = []

generate()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [, concentration] = line.split('/').map(Number)
    console.log(pairs[(concentration ?? 1) - 1])
  })
  .on('close', () => {
    process.exit(0)
  })
