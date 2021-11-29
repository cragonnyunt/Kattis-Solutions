import readline = require('readline')

function removeIfExists (x: number[], a: number): number[] {
  if (x.includes(a)) {
    x.splice(x.indexOf(a), 1)
  } else {
    x.push(a)
  }
  return x
}

const x: number[] = []
const y: number[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [a, b] = line.split(' ').map(Number)
    removeIfExists(x, a ?? 0)
    removeIfExists(y, b ?? 0)
  })
  .on('close', () => {
    console.log(`${x[0]} ${y[0]}`)
    process.exit(0)
  })
