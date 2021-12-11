import readline = require('readline')

function swap (initial: number, a: number, b: number): number {
  if (initial === a) {
    return b
  } else if (initial === b) {
    return a
  }
  return initial
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let initial = 1
    line.split('').forEach(c => {
      switch (c) {
        case 'A':
          initial = swap(initial, 1, 2)
          break
        case 'B':
          initial = swap(initial, 2, 3)
          break
        default:
          initial = swap(initial, 3, 1)
          break
      }
    })
    console.log(initial)
  })
  .on('close', () => {
    process.exit(0)
  })
