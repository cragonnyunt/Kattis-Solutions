import readline = require('readline')

function reverseString (str: string): string {
  return str.split('').reverse().join('')
}

function getMinChar (str: string): string {
  return str.split('').reduce((acc, cur) => acc.localeCompare(cur) < 0 ? acc : cur)
}

function getSubstrings (str: string, minChar: string): Map<number, string> {
  const subStringArrays: Map<number, string> = new Map()
  let start = 0
  let index
  do {
    index = str.indexOf(minChar, start)
    if (index !== -1) {
      const subStr = reverseString(str.substring(0, index + 1))
      subStringArrays.set(index, subStr)
    }
    start = index + 1
  } while (index !== -1)
  return subStringArrays
}

function getMinString (subStringArrays: Map<number, string>): string {
  return [...subStringArrays.values()].reduce((acc, cur) => acc.localeCompare(cur) < 0 ? acc : cur)
}

function getMinIndex (subStrings: Map<number, string>): number {
  const minString = getMinString(subStrings)
  for (const [k] of subStrings) {
    if (subStrings.get(k) === minString) {
      return k
    }
  }
  return -1
}

function getLektira (str: string, offset = 2): string {
  if (offset === 0) {
    return reverseString(str)
  }

  const testStr = str.substring(0, str.length - offset)
  const minChar = getMinChar(testStr)

  const subStrings = getSubstrings(testStr, minChar)
  const minIndex = getMinIndex(subStrings)

  return reverseString(str.substring(0, minIndex + 1)) + getLektira(str.substring(minIndex + 1), offset - 1)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getLektira(line))
  })
  .on('close', () => {
    process.exit(0)
  })
