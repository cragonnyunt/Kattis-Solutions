import readline = require('readline')

function replaceNumbers (str: string): string {
  return ucfirst(
    str
      .split(' ')
      .map((word) => {
        if (!digitOnly.test(word)) {
          return word
        }
        const num = parseInt(word)
        if (num < 20) {
          return string0to19[num]
        }
        if (num % 10 === 0) {
          return string0to90[num / 10]
        }
        return `${string0to90[Math.floor(num / 10)]}-${string0to19[num % 10]}`
      })
      .join(' ')
  )
}

function ucfirst (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const string0to19 = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]
const string0to90 = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]
const digitOnly = /^\d+$/

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(replaceNumbers(line))
  })
  .on('close', () => {
    process.exit(0)
  })
