import readline = require('readline')

type Judge = Map<string, number>;

function setJudge (judge: Judge, line: string): void {
  judge.set(line, (judge.get(line) ?? 0) + 1)
}

function getConsistentResult (judge1: Judge, judge2: Judge): number {
  let consistent = 0
  for (const [key, value] of judge1) {
    consistent += Math.min(value, judge2.get(key) ?? 0)
  }
  return consistent
}

let lineCount = 0
let submissionCount = 0
const domJudge:Judge = new Map()
const kattisJudge:Judge = new Map()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      submissionCount = parseInt(line)
    } else if (lineCount <= submissionCount) {
      setJudge(domJudge, line)
    } else {
      setJudge(kattisJudge, line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getConsistentResult(domJudge, kattisJudge))
    process.exit(0)
  })
