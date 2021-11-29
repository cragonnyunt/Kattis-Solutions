import readline = require('readline')

interface Cups {
  color: string
  radius: number
}

const regNum = /^[0-9]+$/
const cups: Cups[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [a, b] = line.split(' ')
      if (regNum.test(a ?? '')) {
        cups.push({
          color: b ?? '',
          radius: Number(a) / 2
        })
      } else {
        cups.push({
          color: a ?? '',
          radius: Number(b)
        })
      }
    }
    lineCount++
  })
  .on('close', () => {
    console.log(
      cups
        .sort((a, b) => a.radius - b.radius)
        .map((cup) => cup.color)
        .join('\n')
    )
    process.exit(0)
  })
