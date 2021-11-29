import readline = require('readline')

function getNextFraction (p: number, q: number): string {
  const fractions: number[] = []
  if (q === 1) {
    fractions.push(q, p + 1)
  } else if (q === 2) {
    fractions.push(q, p)
  } else if (p < q) {
    fractions.push(q, q - p)
  } else {
    fractions.push(q, q * (1 + Math.floor(p / q)) - (p % q))
  }
  return fractions.join('/')
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [num, fraction] = line.split(' ')
      const [p, q] = (fraction ?? '').split('/').map(Number)
      const frac = getNextFraction(p ?? 0, q ?? 1)
      console.log(`${num} ${frac}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
