import readline = require('readline')

function getBusNumbers (buses: number[]): string[] {
  const diffBuses = getBusesDiffs(buses)
  let result: string[] = []
  for (let index = 0; index < diffBuses.length; index++) {
    if (diffBuses[index] !== 1) {
      result = pushBuses(result, `${buses[index]}`)
      continue
    }
    if (index < diffBuses.length - 1 && diffBuses[index + 1] === 1) {
      result = pushBuses(result, `${buses[index]}-`)
      let j = index + 1
      while (j < diffBuses.length && diffBuses[j] === 1) {
        j++
      }
      index = j - 1
      continue
    }
    result = pushBuses(result, `${buses[index]}`)
  }
  result = pushBuses(result, `${buses[buses.length - 1]}`)
  return result
}

function getBusesDiffs (buses: number[]): number[] {
  const result: number[] = []
  for (let i = 0; i < buses.length - 1; i++) {
    result.push((buses[i + 1] ?? 0) - (buses[i] ?? 0))
  }
  return result
}

function pushBuses (buses: string[], bus: string): string[] {
  if (
    buses.length === 0 ||
    !pendingBus.test(buses[buses.length - 1]?.toString() ?? '')
  ) {
    buses.push(bus)
  } else {
    buses.push((buses.pop() ?? '').concat(bus))
  }
  return buses
}

let lineCount = 0
const pendingBus = /-$/

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 !== 0) {
      const buses = line
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b)
      console.log(getBusNumbers(buses).join(' '))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
