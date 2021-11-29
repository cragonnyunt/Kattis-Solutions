import readline = require('readline')

function getShortestDistance (): number {
  const distance = end - start
  if (distance > 180) {
    return distance - 360
  } else if (distance <= -180) {
    return distance + 360
  } else {
    return distance
  }
}

let start: number
let end: number
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 === 0) {
      start = parseInt(line)
    } else {
      end = parseInt(line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getShortestDistance())
    process.exit(0)
  })
