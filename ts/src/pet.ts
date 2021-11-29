import readline = require('readline')

const scores: number[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const points = line.split(' ').map(Number)
    scores.push(points.reduce((acc, curr) => acc + curr))
  })
  .on('close', () => {
    const maxPoint = Math.max(...scores)
    const maxIndex = scores.indexOf(maxPoint)
    console.log(`${maxIndex + 1} ${maxPoint}`)
    process.exit(0)
  })
