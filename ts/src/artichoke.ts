import readline = require('readline')

function getMaxDecline (
  p: number,
  a: number,
  b: number,
  c: number,
  d: number,
  n: number
): number {
  let maxDecline = 0
  let prevMax = -1
  for (let i = 1; i <= n; i++) {
    const price = getPrice(p, a, b, c, d, i)
    const decline = prevMax - price
    if (decline > 0) {
      maxDecline = Math.max(maxDecline, decline)
    } else {
      prevMax = price
    }
  }
  return maxDecline
}

function getPrice (
  p: number,
  a: number,
  b: number,
  c: number,
  d: number,
  i: number
): number {
  return p * (Math.sin(a * i + b) + Math.cos(c * i + d) + 2)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [p, a, b, c, d, n] = line.split(' ').map(Number)
    console.log(getMaxDecline(p ?? 0, a ?? 0, b ?? 0, c ?? 0, d ?? 0, n ?? 0))
  })
  .on('close', () => {
    process.exit(0)
  })
