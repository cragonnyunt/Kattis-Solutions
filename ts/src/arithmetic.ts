import readline = require('readline')

function toBinary (oct: string) {
  return oct
    .split('')
    .map((octDigit) => {
      return parseInt(octDigit).toString(2).padStart(3, '0')
    })
    .join('')
}

function toHex (binary: string) {
  if (binary.split('').every((bit) => bit === '0')) {
    return '0'
  }
  binary = binary.padStart(binary.length + 4 - (binary.length % 4), '0')
  const hex = []
  for (let i = 0; i < binary.length; i += 4) {
    const strSlice = binary.slice(i, i + 4)
    hex.push(parseInt(strSlice, 2).toString(16).toUpperCase())
  }
  return hex.join('').replace(/^0+(?!$)/, '')
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line) => {
    console.log(toHex(toBinary(line)))
  })
