import readline = require('readline')

function removeBackspaces (str: string): string {
  return str
    .split('')
    .reduce(
      (acc, cur) => {
        if (cur === '<') {
          acc.pop()
        } else {
          acc.push(cur)
        }
        return acc
      },
      ['']
    )
    .join('')
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(removeBackspaces(line))
  })
