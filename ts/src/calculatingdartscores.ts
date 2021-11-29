import readline = require('readline')

function getDartScore (score: number): string {
  return darts[score] ?? ''
}

function calculateDarts (): void {
  const multipliers: number[][] = []
  const score: number[][] = []

  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        multipliers.push([a, b, c])
      }
    }
  }

  for (let x3 = 0; x3 <= 20; x3++) {
    for (let x2 = 0; x2 <= 20; x2++) {
      for (let x1 = 0; x1 <= 20; x1++) {
        score.push([x3, x2, x1])
      }
    }
  }

  const multiplier = ['single', 'double', 'triple']
  for (const i of score) {
    for (const j of multipliers) {
      const result = i.reduce((a, b, i) => a + b * (j[i] ?? 1), 0)
      if (darts[result] === 'impossible') {
        darts[result] = i.reduce((a, b, i) => {
          if (b === 0) {
            return a
          }
          return [a, `${multiplier[(j[i] ?? 1) - 1]} ${b}`].join('\n')
        }, '')
      }
    }
  }
}

const darts = new Array<string>(181).fill('impossible')

calculateDarts()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getDartScore(Number(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
