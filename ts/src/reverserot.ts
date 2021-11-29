import readline = require('readline')

function initializeScheme (): string[] {
  const scheme: string[] = []
  for (let i = 0; i < 26; i++) {
    scheme.push(String.fromCharCode(i + 'A'.charCodeAt(0)))
  }
  scheme.push('_')
  scheme.push('.')
  return scheme
}

function encrypt (str: string, N: number): string {
  const result: string[] = []
  str.split('').reverse().forEach(char => {
    const index = scheme.indexOf(char)
    result.push(scheme[(index + N) % scheme.length] ?? '')
  })
  return result.join('')
}

const scheme = initializeScheme()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0') {
      process.exit(0)
    }
    const [N, str] = line.split(' ')
    console.log(encrypt(str ?? '', Number(N)))
  })
  .on('close', () => {
    process.exit(0)
  })
