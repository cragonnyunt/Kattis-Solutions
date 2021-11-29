import readline = require('readline')

function isPrimeNumber (num: number): boolean {
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getBase (num: number): number {
  num -= 3

  if (num === 0) {
    return 4
  }

  if (num <= 3) {
    return -1
  }

  let isPrime = true
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      isPrime = false
      if (i >= 4) {
        return i
      }
      const factor = num / i
      if (factor >= 4 && isPrimeNumber(factor)) {
        return factor
      }
      break
    }
  }

  if (isPrime) {
    return num
  }

  for (let i = 4; i <= num; i++) {
    if (num % i === 0) {
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
    const num = parseInt(line)
    const base = getBase(num)
    console.log(base === -1 ? 'No such base' : base)
  })
  .on('close', () => {
    process.exit(0)
  })
