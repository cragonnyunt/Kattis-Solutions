import readline = require('readline')

function translate (word: string): string {
  return word.split('').reduce((acc, letter) => {
    return [acc, acc[acc.length - 1] !== letter ? letter : ''].join('')
  })
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(translate(line))
  })
  .on('close', () => {
    process.exit(0)
  })
