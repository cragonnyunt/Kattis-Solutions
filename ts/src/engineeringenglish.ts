import readline = require('readline')

const words: Set<string> = new Set<string>()
const book: string[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    line.split(' ').forEach((word: string) => {
      if (words.has(word.toLowerCase())) {
        book.push('.')
      } else {
        book.push(word)
        words.add(word.toLowerCase())
      }
    })
  })
  .on('close', () => {
    console.log(book.join(' '))
    process.exit(0)
  })
