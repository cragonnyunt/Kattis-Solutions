import readline = require('readline')

function diff (oldStr: string, newStr: string): string[] {
  const lines: string[] = []
  lines.push(oldStr)
  lines.push(newStr)
  lines.push(
    oldStr
      .split('')
      .map((char, i) => (char === newStr[i] ? '.' : '*'))
      .join('')
  )
  lines.push('')
  return lines
}

let lineCount = 0
let str: string

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (lineCount % 2 === 1) {
        str = line
      } else {
        const result = diff(str, line)
        console.log(result.join('\n'))
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
