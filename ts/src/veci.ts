import readline = require('readline')

function getResult (nums: number[]): number {
  const original = parseInt(nums.join(''))
  getPer(nums, 0, original)
  return permuted === Number.MAX_SAFE_INTEGER ? 0 : permuted
}

function getPer (nums: number[], start: number, num: number) {
  if (start === nums.length - 1) {
    const res = parseInt(nums.join(''))
    if (res > num) {
      permuted = Math.min(permuted, res)
    }
  } else {
    for (let i = start; i < nums.length; i++) {
      nums = swap(nums, start, i)
      getPer(nums, start + 1, num)
      nums = swap(nums, start, i)
    }
  }
}

function swap (nums: number[], i: number, j: number): number[] {
  const temp = nums.slice()
  ;[temp[i], temp[j]] = [temp[j] ?? 0, temp[i] ?? 0]
  return temp
}

let permuted = Number.MAX_SAFE_INTEGER

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getResult(line.split('').map(Number)))
  })
  .on('close', () => {
    process.exit(0)
  })
