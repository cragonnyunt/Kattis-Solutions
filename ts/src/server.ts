import readline = require('readline')

function getProcessedCount (tasks: number[]): number {
  let t = 0; let jobs = 0
  for (const s of tasks) {
    if (t + s > time) {
      break
    }
    t += s
    jobs++
  }
  return jobs
}

let lineCount = 0
let time: number

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      const [, t] = line.split(' ').map(Number)
      time = t ?? 0
    } else {
      const tasks = line.split(' ').map(Number)
      console.log(getProcessedCount(tasks))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
