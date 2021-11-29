import readline = require('readline')

function getDays (cipher: string): number {
  let days = 0
  cipher.split('').forEach((char, index) => {
    if (char !== letter.charAt(index % letter.length)) {
      days++
    }
  })
  return days
}

const letter = 'PER'

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getDays(line))
  })
  .on('close', () => {
    process.exit(0)
  })
