import readline = require('readline')

function getOrder (lineup: string[]): string {
  const lineupAsc = lineup.slice().sort()
  const lineupDesc = lineup.slice().sort((a, b) => b.localeCompare(a))

  let isAsc = true
  let isDesc = true

  for (const [index, name] of lineup.entries()) {
    if (isAsc && name !== lineupAsc[index]) {
      isAsc = false
    }
    if (isDesc && name !== lineupDesc[index]) {
      isDesc = false
    }
    if (!isAsc && !isDesc) {
      break
    }
  }
  if (isAsc) {
    return 'INCREASING'
  } else if (isDesc) {
    return 'DECREASING'
  } else {
    return 'NEITHER'
  }
}

let lineCount = 0
const lineup: string[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      lineup.push(line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getOrder(lineup))
    process.exit(0)
  })
