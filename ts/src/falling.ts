import readline = require('readline')

function getFactors (num: number): [number, number] | null {
  for (let i = 1; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      const factor = num / i
      if ((i + factor) % 2 === 0) {
        return [i, factor]
      }
    }
  }
  return null
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const num = parseInt(line, 10)
    const factors = getFactors(num)
    if (factors) {
      const [Y, X] = factors
      const n2 = Math.abs(Y + X) / 2
      const n1 = Math.abs(Y - X) / 2
      console.log(`${n1} ${n2}`)
    } else {
      console.log('impossible')
    }
  })
  .on('close', () => {
    process.exit(0)
  })
