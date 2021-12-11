import readline = require('readline')

function sortSymmetric (names: string[]): string[] {
  const sortedFirst: string[] = []
  const sortedSecond: string[] = []
  names.forEach((name, index) => {
    if (index % 2 === 0) {
      sortedFirst.push(name)
    }
  })
  names.forEach((name, index) => {
    if (index % 2 !== 0) {
      sortedSecond.push(name)
    }
  })
  return sortedFirst.concat(sortedSecond.reverse())
}

let names: string[] = []
let setNumber = 0
const digitOnly = /^\d+$/

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (digitOnly.test(line)) {
      if (names.length > 0) {
        console.log(`SET ${++setNumber}`)
        console.log(sortSymmetric(names).join('\n'))
      }
      names = []
      if (line === '0') {
        process.exit(0)
      }
    } else {
      names.push(line)
    }
  })
  .on('close', () => {
    process.exit(0)
  })
