import readline = require('readline')

function decode (msg: string): string {
  const length = Math.sqrt(msg.length)
  const result: string[] = []
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < msg.length; j += length) {
      result.push(msg[j] ?? '')
    }
  }
  return result.join('')
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(decode(line))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
