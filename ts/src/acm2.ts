import readline = require('readline')

function calculate () {
  const p = times[firstProblem] ?? 0
  if (p > 300) {
    return [0, 0]
  }

  let totalTime = p
  times = times.filter((time) => time !== p).sort((a, b) => a - b)
  let remainingTime = 300 - totalTime
  times = times.filter((time) => {
    if (time <= remainingTime) {
      totalTime += time
      remainingTime = 300 - totalTime
      return true
    }
    return false
  })
  times.unshift(p)
  let count = 1
  return [times.length, times.reverse().reduce((a, b) => a + count++ * b, 0)]
}

let firstProblem: number
let times: number[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line) => {
    if (lineCount % 2 === 0) {
      const [, first] = line.split(' ').map(Number)
      firstProblem = first ?? 0
    } else {
      times.push(...line.split(' ').map(Number))
      const [problemsSolved, penaltyTime] = calculate()
      console.log(`${problemsSolved} ${penaltyTime}`)
      times = []
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
