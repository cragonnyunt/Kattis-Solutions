import readline = require('readline')

function getCharCounts (str: string): number[] {
  const charCounts = new Map<string, number>()
  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) ?? 0) + 1)
  }
  return [...charCounts.values()]
}

function getMinimumCount (charCounts: number[]): number {
  charCounts.sort((a, b) => a - b)
  charCounts.pop()
  charCounts.pop()
  return charCounts.reduce((acc, curr) => acc + curr, 0)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const charCounts = getCharCounts(line)
    console.log(getMinimumCount(charCounts))
  })
  .on('close', () => {
    process.exit(0)
  })
