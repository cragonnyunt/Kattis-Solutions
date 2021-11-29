import readline = require('readline')

function sumOfDigits (num: number): number {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}

function minimumMultiplier (num: number): number {
  const sum = sumOfDigits(num)
  for (let i = 11; i < Number.MAX_SAFE_INTEGER; i++) {
    if (sum === sumOfDigits(num * i)) {
      return i
    }
  }
  return -1
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0') {
      process.exit(0)
    }
    console.log(minimumMultiplier(parseInt(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
