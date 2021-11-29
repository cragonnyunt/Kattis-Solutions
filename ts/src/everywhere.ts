import readline = require('readline')

const cities: Set<string> = new Set<string>()
const digitsRegex = /^[0-9]+$/
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (digitsRegex.test(line)) {
        if (cities.size > 0) {
          console.log(cities.size)
          cities.clear()
        }
      } else {
        cities.add(line)
      }
    }
    lineCount++
  })
  .on('close', () => {
    if (cities.size > 0) {
      console.log(cities.size)
      cities.clear()
    }
    process.exit(0)
  })
