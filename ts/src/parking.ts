import readline = require('readline')

function getPrice (): number {
  const maxTruck = trucks.reduce((acc, truck) => {
    return acc > Math.max(...truck) ? acc : Math.max(...truck)
  }, Number.MIN_SAFE_INTEGER)

  const path = Array<number>(maxTruck).fill(0)
  trucks.forEach(truck => {
    for (let i = truck[0] ?? 0; i < (truck[1] ?? 0); i++) {
      path[i] += 1
    }
  })

  return path.reduce((acc, curr) => acc + curr * (prices[curr - 1] ?? 0), 0)
}

const prices: number[] = []
const trucks: number[][] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      const p = line.split(' ').map(Number)
      prices.push(...p)
    } else {
      const t = line.split(' ').map(Number)
      trucks.push(t)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getPrice())
    process.exit(0)
  })
