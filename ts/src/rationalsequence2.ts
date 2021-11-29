import readline = require('readline')

function getSeq (p: number, q: number): number {
  if (p === q) {
    return 1
  }
  if (p > q) {
    return getSeq(p - q, p) + 1
  }
  if (p < q) {
    if (p === 1) {
      return Math.pow(2, q - 1)
    }
    return getSeq(p, q % p) * Math.pow(2, Math.floor(q / p))
  }
  return 0
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
      const seq = getSeq(p ?? 0, q ?? 1)
      console.log(`${num} ${seq}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
