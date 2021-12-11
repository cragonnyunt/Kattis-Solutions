import readline = require('readline')

function getYoda (str1: string, str2: string): (number|string)[] {
  [str1, str2] = padZero(str1, str2)
  const yoda1 = collide(str1, str2)
  const yoda2 = collide(str2, str1)
  return [
    yoda1.length > 0 ? parseInt(yoda1) : 'YODA',
    yoda2.length > 0 ? parseInt(yoda2) : 'YODA'
  ]
}

function collide (str1: string, str2: string): string {
  return str1
    .split('')
    .map((s1, i) => {
      if (s1.localeCompare(str2[i] ?? '') >= 0) {
        return s1
      }
      return null
    })
    .filter((s) => s !== null)
    .join('')
}

function padZero (str1: string, str2: string): [string, string] {
  return [str1.padStart(str2.length, '0'), str2.padStart(str1.length, '0')]
}

let str1: string
let str2: string
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      str1 = line
    } else {
      str2 = line
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getYoda(str1, str2).join('\n'))
    process.exit(0)
  })
