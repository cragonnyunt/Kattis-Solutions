import readline = require('readline')

function getStatistics (array: number[]): [number, number, number] {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  array.forEach((element) => {
    if (element < min) {
      min = element
    }
    if (element > max) {
      max = element
    }
  })
  return [min, max, max - min]
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const array = line.split(' ').map(Number)
    array.shift()
    console.log(`Case ${++lineCount}: ${getStatistics(array).join(' ')}`)
  })
  .on('close', () => {
    process.exit(0)
  })
