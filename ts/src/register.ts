import readline = require('readline')

function generateMultipliers (): number[] {
  const primes = [2, 3, 5, 7, 11, 13, 17]
  const multipliers = [1]
  for (let i = 1; i < size; i++) {
    multipliers.push((multipliers[i - 1] ?? 1) * (primes[i - 1] ?? 0))
  }
  return multipliers
}

function calculateStore (registers: number[]): number {
  return maxValue - registers.reduce((acc, curr, index) => acc + curr * (multipliers[index] ?? 1), 0)
}

const maxValue = 9699689
const size = 8
const multipliers = generateMultipliers()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const registers = line.split(' ').map(Number)
    console.log(calculateStore(registers))
  })
  .on('close', () => {
    process.exit(0)
  })
