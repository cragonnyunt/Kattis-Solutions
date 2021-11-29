import readline = require('readline')

function isPrime (n: number): boolean {
  if (n <= 1) {
    return false
  }
  if (n <= 3) {
    return true
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
  }
  return true
}

function getNextHashTableSize (n: number): number {
  let nextSize = n * 2
  while (!isPrime(nextSize)) {
    nextSize++
  }
  return nextSize
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
    const nextSize = getNextHashTableSize(parseInt(line))
    if (isPrime(parseInt(line))) {
      console.log(nextSize)
    } else {
      console.log(`${nextSize} (${line} is not prime)`)
    }
  })
  .on('close', () => {
    process.exit(0)
  })
