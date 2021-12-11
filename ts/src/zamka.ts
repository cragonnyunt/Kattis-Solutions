import readline = require('readline')

function getDigitSum (num: number): number {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}

function getMinSum (start: number, end: number, sum: number): number {
  for (let i = start; i <= end; i++) {
    if (getDigitSum(i) === sum) {
      return i
    }
  }
  return -1
}

function getMaxSum (start: number, end: number, sum: number): number {
  for (let i = end; i >= start; i--) {
    if (getDigitSum(i) === sum) {
      return i
    }
  }
  return -1
}

let start: number
let end: number
let sum: number
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      start = parseInt(line)
    } else if (lineCount === 1) {
      end = parseInt(line)
    } else {
      sum = parseInt(line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getMinSum(start, end, sum))
    console.log(getMaxSum(start, end, sum))
    process.exit(0)
  })
