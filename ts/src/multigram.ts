import readline = require('readline')

function compareStrings (str1: string, str2: string): boolean {
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  return str1 === str2
}

function testAnagram (anagram: string, str: string): boolean {
  const i = anagram.length
  for (let j = i; j < str.length; j += i) {
    const nextAnagram = str.substr(j, i)
    if (!compareStrings(anagram, nextAnagram)) {
      return false
    }
  }
  return true
}

function getMultigram (str: string): string {
  for (let i = 1; i <= Math.floor(str.length / 2); i++) {
    if (str.length % i === 0) {
      const anagram = str.substr(0, i)
      if (testAnagram(anagram, str)) {
        return anagram
      }
    }
  }
  return '-1'
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getMultigram(line))
  })
  .on('close', () => {
    process.exit(0)
  })
