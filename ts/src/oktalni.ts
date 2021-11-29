import readline = require('readline')

function toOct (binary: string): string {
  const result: string[] = []
  for (let i = 0; i < binary.length; i += 3) {
    result.push(parseInt(binary.substr(i, 3), 2).toString())
  }
  return result.join('')
}

function padBinary (binary: string): string {
  let length = binary.length
  if (length % 3 !== 0) {
    length += 3 - length % 3
  }
  return binary.padStart(length, '0')
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(toOct(padBinary(line)))
  })
  .on('close', () => {
    process.exit(0)
  })
