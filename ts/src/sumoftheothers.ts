import readline = require('readline')

function getSum (nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0) / 2
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const nums = line.split(' ').map(Number)
    console.log(getSum(nums))
  })
  .on('close', () => {
    process.exit(0)
  })
