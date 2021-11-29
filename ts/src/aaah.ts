import readline = require('readline')

let lineCount = 0
let jon: string
let doc: string

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      jon = line
    } else {
      doc = line
    }
    lineCount++
  })
  .on('close', () => {
    console.log(jon.lastIndexOf('a') >= doc.lastIndexOf('a') ? 'go' : 'no')
    process.exit(0)
  })
