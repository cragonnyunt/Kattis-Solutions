import readline = require('readline')

function permuteWords (): string[] {
  const compoundWords: Set<string> = new Set<string>()
  for (const word of words) {
    for (const word2 of words) {
      if (word !== word2) {
        compoundWords.add(word + word2)
      }
    }
  }
  return Array.from(compoundWords).sort()
}

const words: string[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    words.push(...line.split(' '))
  })
  .on('close', () => {
    console.log(permuteWords().join('\n'))
    process.exit(0)
  })
