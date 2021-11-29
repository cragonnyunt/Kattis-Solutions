import readline = require('readline')

function generateBits (): void {
  for (let i = 0; i < 10; i++) {
    bits[i] = i
      .toString(2)
      .split('')
      .filter((x) => x === '1').length
  }
  for (let i = 10; i < bits.length; i++) {
    bits[i] = Math.max((bits[Math.floor(i / 10)] ?? 0), get1sCount(i))
  }
}

function getMaxBit (n: number): number {
  if (n < bits.length) {
    return bits[n] ?? 0
  }
  return Math.max(getMaxBit(Math.floor(n / 10)), get1sCount(n))
}

function get1sCount (n: number): number {
  return n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length
}

let lineCount = 0
const maxInputSize = 250001
const bits: number[] = Array(maxInputSize).fill(0)

generateBits()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(getMaxBit(parseInt(line)))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
