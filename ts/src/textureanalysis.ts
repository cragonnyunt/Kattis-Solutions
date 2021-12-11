import readline = require('readline')

function isEvenlySeparated (str: string): boolean {
  const chars = str.split('*')
  chars.pop()
  chars.shift()

  return chars.length === 0 || chars.every(char => {
    return char.length === chars[0]?.length
  })
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === 'END') {
      process.exit(0)
    }
    console.log(`${++lineCount} ${isEvenlySeparated(line) ? 'EVEN' : 'NOT EVEN'}`)
  })
  .on('close', () => {
    process.exit(0)
  })
