import readline = require('readline')

function encrypt (text: string, key: number): string {
  text = text.toUpperCase()
  text = text.replace(/ /g, '')

  const result: string[] = []
  let start = 0
  let index = start
  text.split('').forEach(char => {
    result[index] = char
    if ((index + key) < text.length) {
      index += key
    } else {
      index = ++start
    }
  })
  return result.join('')
}

let lineCount = 0
let key = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 === 0) {
      if (line === '0') {
        process.exit(0)
      } else {
        key = parseInt(line)
      }
    } else {
      console.log(encrypt(line, key))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
