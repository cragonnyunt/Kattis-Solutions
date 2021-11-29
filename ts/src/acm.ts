import readline = require('readline')

function calculate (): number[] {
  let problemsSolved = 0
  let totalTime = 0
  const resolved: string[] = []
  solutions.reverse().forEach((solution) => {
    if (solution.solved) {
      resolved.push(solution.problem)
      problemsSolved++
      totalTime += solution.time
    } else if (resolved.includes(solution.problem)) {
      totalTime += 20
    }
  })
  return [problemsSolved, totalTime]
}

const solutions: {
  readonly time: number
  readonly problem: string
  readonly solved: boolean
}[] = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line: string) => {
  if (line === '-1') {
    rl.close()
  }

  const [p1, problem, p3] = line.split(' ')
  solutions.push({
    time: parseInt(p1 ?? '0'),
    problem: problem ?? '',
    solved: p3 === 'right'
  })
}).on('close', () => {
  const [problemsSolved, totalTime] = calculate()
  console.log(`${problemsSolved} ${totalTime}`)
  process.exit(0)
})
