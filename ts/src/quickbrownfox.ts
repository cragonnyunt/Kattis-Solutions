import readline = require('readline')

function getMissing (str: string): string[] {
  return allLetters.filter(letter => !str.toLowerCase().includes(letter))
}

const allLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const letters = getMissing(line)
      if (letters.length > 0) {
        console.log(`missing ${letters.join('')}`)
      } else {
        console.log('pangram')
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
