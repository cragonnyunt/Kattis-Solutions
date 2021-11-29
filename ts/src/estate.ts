import readline = require('readline')

function generate (): void {
  let count = 1
  for (let i = 2; i < options.length; i += ++count + 1) {
    for (let j = i; j < options.length; j += count) {
      options[j - 1]++
    }
  }
}

const options: number[] = Array(1000000).fill(0)

generate()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0') {
      process.exit(0)
    }
    console.log(options[parseInt(line) - 1])
  })
  .on('close', () => {
    process.exit(0)
  })
