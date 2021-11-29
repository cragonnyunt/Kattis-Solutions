import readline = require('readline')

function generateSmallest (): string[] {
  const smallest = [
    '1',
    '7',
    '4',
    '2',
    '6',
    '8',
    '10',
    '18',
    '22',
    '20',
    '28',
    '68',
    '88',
    '108',
    '188',
    '200'
  ]
  for (let i = 16; i < 99; i++) {
    smallest[i] = smallest[i - 7] + '8'
  }
  return smallest
}

function getMatchSticks (num: number): [string, string] {
  const length = Math.floor(num / 2)
  const largest: string[] = []
  for (let i = 0; i < length; i++) {
    largest.push('1')
  }
  if (num % 2 !== 0) {
    largest[0] = '7'
  }
  return [smallests[num - 2] ?? '', largest.join('')]
}

let lineCount = 0
const smallests: string[] = generateSmallest()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(getMatchSticks(parseInt(line)).join(' '))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
