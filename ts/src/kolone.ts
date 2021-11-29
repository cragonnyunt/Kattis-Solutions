import readline = require('readline')

function reverseString (str: string): string {
  return str.split('').reverse().join('')
}

function processAnts (ant1: string, ant2: string, seconds: number): string {
  if (seconds >= ant1.length + ant2.length - 1) {
    return `${ant2}${reverseString(ant1)}`
  }

  const str: string[] = [...reverseString(ant1)].concat(...ant2)
  for (let i = 0; i < Math.min(ant1.length, seconds); i++) {
    const index = Math.min(str.length - i - 1, ant1.length + seconds - 2 * i - 1)
    str[index] = ant1.charAt(i)
  }
  for (let i = 0; i < Math.min(ant2.length, seconds); i++) {
    const index = Math.max(i, ant1.length - seconds + 2 * i)
    str[index] = ant2.charAt(i)
  }

  return str.join('')
}

let lineCount = 0
let ant1: string
let ant2: string
let seconds: number

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 1) {
      ant1 = line
    } else if (lineCount === 2) {
      ant2 = line
    } else if (lineCount === 3) {
      seconds = parseInt(line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(processAnts(ant1, ant2, seconds))
    process.exit(0)
  })
