import readline = require('readline')

function squaredSum (num: number): number {
  let sum = 0
  while (num > 0) {
    const digit = num % 10
    sum += digit * digit
    num = Math.floor(num / 10)
  }
  return sum
}

function generateArray (): number[] {
  const result: number[] = []

  const happy = new Set<number>()
  const unhappy = new Set<number>()

  const SIZE = 250001
  const proceed: boolean[] = Array(SIZE).fill(true)
  proceed[0] = false
  proceed[1] = false
  for (let i = 2; i < SIZE; i++) {
    if (proceed[i]) {
      const store: number[] = []
      let num = i
      for (;;) {
        if (happy.has(num)) {
          result.push(i)
          break
        }
        if (unhappy.has(num)) {
          break
        }

        store.push(num)

        num = squaredSum(num)
        if (num === 1 || num === 7) {
          store.forEach(n => happy.add(n))
          result.push(i)
        } else if (num < 10) {
          store.forEach(n => unhappy.add(n))
        }
      }
      for (let j = i * 2; j < SIZE; j += i) {
        proceed[j] = false
      }
    }
  }

  return result
}

const happyPrimes = generateArray()
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [num, candidate] = line.split(' ').map(Number)
      console.log(`${num} ${candidate} ${happyPrimes.includes(candidate ?? 1) ? 'YES' : 'NO'}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
