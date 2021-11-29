import readline = require('readline')

function getKthNumber (K: number): string {
  const str: string[] = []

  while (K > 0) {
    const remainder = K % 7
    switch (remainder) {
      case 3:
        str.push('5')
        break
      case 4:
        str.push('9')
        break
      case 5:
        str.push('8')
        break
      default:
        str.push(remainder.toString())
        break
    }
    K = Math.floor(K / 7)
  }

  return str.join('')
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const K = parseInt(line)
    console.log(getKthNumber(K))
  })
  .on('close', () => {
    process.exit(0)
  })
