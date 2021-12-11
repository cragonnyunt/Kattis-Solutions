import readline = require('readline')

const keyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
]

function decode (str: string): string {
  str = str.toLowerCase()
  const row = keyboard[keyboard.findIndex((row) => row.includes(str))] ?? []
  return row[Math.max(0, row.indexOf(str) - 1)]?.toUpperCase() ?? ''
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(
      line.split(' ').map((str) => str.split('').map(decode).join('')).join(' ')
    )
  })
  .on('close', () => {
    process.exit(0)
  })
