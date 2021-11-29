import readline = require('readline')

function anagramCount (input: string): string {
  return input
    .split('')
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((char) => ({
      char,
      count: input
        .split('')
        .reduce((count, c) => count + (c === char ? 1 : 0), 0)
    }))
    .filter((char) => char.count > 1)
    .reduce(
      (result, char) => result / (factorials[char.count - 1] ?? BigInt(1)),
      factorials[input.length - 1] ?? BigInt(1)
    ).toString()
}

function generateFactorials (count: number): void {
  factorials.push(BigInt(1))
  for (let i = 1; i < count; i++) {
    factorials[i] = (factorials[i - 1] ?? BigInt(1)) * BigInt(i + 1)
  }
}

const factorials: bigint[] = []

generateFactorials(101)

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(anagramCount(line))
  })
  .on('close', () => {
    process.exit(0)
  })
