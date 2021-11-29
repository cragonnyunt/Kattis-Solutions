import readline = require('readline')

function getSumSequence (sum: number): number[] {
  for (const i of partialSums.keys()) {
    const diff = sum - (partialSums.get(i) ?? 0)
    if (diff < 0) {
      return []
    } else if (diff % i === 0) {
      return range(1 + diff / i, i)
    }
  }
  return []
}

function range (start: number, count: number): number[] {
  return Array(count)
    .fill(0)
    .map((_, idx) => start + idx)
}

function generateSums (): void {
  let N = 1
  for (let i = 2; (N += i) < 1000000000; i++) {
    partialSums.set(i, N)
  }
}

let lineCount = 0
const partialSums = new Map<number, number>()

generateSums()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const sum = parseInt(line)
      const sumSequence = getSumSequence(sum)
      if (sumSequence.length > 0) {
        console.log(`${sum} = ${sumSequence.join(' + ')}`)
      } else {
        console.log('IMPOSSIBLE')
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
