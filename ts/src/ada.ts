import readline = require('readline')

function calculate (list: number[]): number[] {
  const diffs = getDiffs(list)
  if (diffs.every((d) => d === diffs[0])) {
    return [diffs.pop() ?? 0]
  }
  return calculate(diffs).concat(diffs.pop() ?? 0)
}

function getDiffs (list: number[]): number[] {
  const result: number[] = []
  for (let i = 0; i < list.length - 1; i++) {
    result.push((list[i + 1] ?? 0) - (list[i] ?? 0))
  }
  return result
}

const polynomial: number[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    polynomial.push(...line.split(' ').slice(1).map(Number))
  })
  .on('close', () => {
    const lastElements = calculate(polynomial)
    console.log(
      `${lastElements.length} ${lastElements.reduce(
        (a, b) => a + b,
        polynomial.pop() ?? 0
      )}`
    )
    process.exit(0)
  })
