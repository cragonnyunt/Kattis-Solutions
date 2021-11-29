import readline = require('readline')

function translate (
  alienNum: string,
  sourceLang: string,
  targetLang: string
): string {
  return toTarget(toBase10(alienNum, sourceLang), targetLang)
}

function toBase10 (alienNum: string, sourceLang: string): number {
  return [...alienNum]
    .map((n) => sourceLang.indexOf(n))
    .reverse()
    .reduce((acc, curr, index) => {
      return acc + curr * Math.pow(sourceLang.length, index)
    })
}

function toTarget (num: number, targetLang: string): string {
  const str: string[] = []
  while (num > 0) {
    str.push(targetLang[num % targetLang.length] ?? '')
    num = Math.floor(num / targetLang.length)
  }
  return str.reverse().join('')
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [alienNum, sourceLang, targetLang] = line.split(' ')
      console.log(
        `Case #${lineCount}: ${translate(
          alienNum ?? '',
          sourceLang ?? '',
          targetLang ?? ''
        )}`
      )
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
