import readline = require('readline')

function decodeKemija (str: string): string {
  for (const v of vowels) {
    str = str.replace(new RegExp(`${v}p${v}`, 'g'), v)
  }
  return str
}

const vowels = ['a', 'e', 'i', 'o', 'u']

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(decodeKemija(line))
  })
  .on('close', () => {
    process.exit(0)
  })
