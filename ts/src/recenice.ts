import readline = require('readline')

function generateCounts (): number[] {
  const counts = Array<number>(1000).fill(0)
  for (let totalLen = 4; totalLen < counts.length; totalLen++) {
    const numLength = convertToString(totalLen).length
    const strLen = totalLen - numLength
    counts[strLen] = counts[strLen] === 0 ? totalLen : counts[strLen] ?? 0
  }
  return counts
}

function convertToString (num: number): string {
  const str: string[] = []

  const hundreds = Math.floor(num / 100)
  if (hundreds > 0) {
    str.push(`${Num0to9[hundreds]}hundred`)
    num %= 100
  }

  const tens = Math.floor(num / 10)
  if (tens > 1) {
    str.push(`${Num10to90[tens]}`)
  } else if (tens === 1) {
    str.push(`${Num10to19[(num % 100) - 10]}`)
    return str.join('')
  }

  const ones = num % 10
  if (ones > 0) {
    str.push(`${Num0to9[ones]}`)
  }

  return str.join('')
}

function processStr (sentence: string[]): string {
  const length = sentence.reduce((acc, cur) => acc + cur.length, 0)
  const replaceStr = convertToString(counts[length - 1] ?? 0)

  const index = sentence.indexOf('$')
  sentence.splice(index, 1, replaceStr)

  return sentence.join(' ')
}

const sentence: string[] = []
const Num0to9: string[] = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]
const Num10to19: string[] = [
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
const Num10to90: string[] = [
  '',
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
const counts = generateCounts()
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      sentence.push(line)
    }
    lineCount++
  })
  .on('close', () => {
    console.log(processStr(sentence))
    process.exit(0)
  })
