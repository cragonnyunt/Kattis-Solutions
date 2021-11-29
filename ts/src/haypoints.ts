import readline = require('readline')

let lineCount = 0
let salary = 0
const dictionary = new Map<string, number>()
let dictionaryLength = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      dictionaryLength = line.split(' ').map(Number)[0] ?? 0
    } else if (lineCount <= dictionaryLength) {
      const [job, salary] = line.split(' ')
      dictionary.set(job ?? '', Number(salary))
    } else {
      if (line === '.') {
        console.log(salary)
        salary = 0
      } else {
        line.split(' ').forEach(job => {
          salary += dictionary.get(job) ?? 0
        })
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
