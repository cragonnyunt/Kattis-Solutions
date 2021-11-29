import readline = require('readline')

function getSpamRatio (line: string): number[] {
  const spamRatio: number[] = [0, 0, 0, 0]

  line.split('').forEach((char) => {
    const indexes: number[] = []
    if (char === '_') {
      indexes.push(0)
    }
    if (lowerCase.test(char)) {
      indexes.push(1)
    }
    if (upperCase.test(char)) {
      indexes.push(2)
    }
    if (indexes.length === 0) {
      indexes.push(3)
    }

    indexes.forEach((index) => {
      spamRatio[index]++
    })
  })

  return spamRatio.map((num) => num / line.length)
}

const lowerCase = /^[a-z]$/
const upperCase = /^[A-Z]$/

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getSpamRatio(line).join('\n'))
  })
  .on('close', () => {
    process.exit(0)
  })
