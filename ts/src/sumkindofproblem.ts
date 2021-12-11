import readline = require('readline')

function getSums (num: number): [number, number, number] {
  return [(num * (num + 1)) / 2, num * num, num * (num + 1)]
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [set, num] = line.split(' ').map(Number)
      console.log(`${set} ${getSums(num ?? 0).join(' ')}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
