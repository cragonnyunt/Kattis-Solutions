import readline = require('readline')

function getBase2Palindrome (n: number): number {
  const bits = searchBits(n)
  const left = generateBinary(Math.ceil(bits / 2), n - (seq[bits - 1] ?? 0) - 1)
  const right = left.split('').reverse()
  if (bits % 2 !== 0) {
    right.shift()
  }
  return parseInt(left + right.join(''), 2)
}

function searchBits (n: number): number {
  return seq.findIndex((x) => x >= n)
}

function generateBinary (bits: number, n: number) {
  const binary = n + Math.pow(2, bits - 1)
  return binary.toString(2)
}

function generateNth1Palindromes (max: number): void {
  for (let i = 0; (seq[seq.length - 1] ?? 0) <= max; i++) {
    seq.push((seq[seq.length - 1] ?? 0) + 2 ** Math.floor(i / 2))
  }
}

const seq: number[] = [0]

generateNth1Palindromes(50000)

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getBase2Palindrome(parseInt(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
