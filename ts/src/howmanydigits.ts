import readline = require('readline')

function generateBases (): number[] {
  const result: number[] = []
  const size = 1000001
  result.push(1)
  result.push(1)
  for (let i = 2; i < size; i++) {
    result.push(Math.log10(i) + (result[result.length - 1] ?? 0))
  }
  return result
}

const bases: number[] = generateBases()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const num = parseInt(line)
    console.log(Math.floor(bases[num] ?? 0))
  })
  .on('close', () => {
    process.exit(0)
  })
