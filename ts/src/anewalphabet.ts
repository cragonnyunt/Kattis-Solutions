import readline = require('readline')

function translate (word: string): string {
  return word
    .split('')
    .map((letter) => {
      if (lettersRegExp.test(letter)) {
        return alphabets[letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]
      } else {
        return letter
      }
    })
    .join('')
}

const alphabets = [
  '@',
  '8',
  '(',
  '|)',
  '3',
  '#',
  '6',
  '[-]',
  '|',
  '_|',
  '|<',
  '1',
  '[]\\/[]',
  '[]\\[]',
  '0',
  '|D',
  '(,)',
  '|Z',
  '$',
  "']['",
  '|_|',
  '\\/',
  '\\/\\/',
  '}{',
  '`/',
  '2'
]
const lettersRegExp = /[a-zA-Z]/

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
