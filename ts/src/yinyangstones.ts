import readline = require('readline')

function isBalanced (stones: string[]): boolean {
  if (stones.length % 2 !== 0) {
    return false
  }
  return stones.reduce((acc, stone) => {
    return stone === 'B' ? ++acc : --acc
  }, 0) === 0
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(isBalanced(line.split('')) ? '1' : 0)
  })
  .on('close', () => {
    process.exit(0)
  })
