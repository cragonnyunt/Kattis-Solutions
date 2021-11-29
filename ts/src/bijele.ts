import readline = require('readline')

const correctSet = [1, 1, 2, 2, 2, 8]

readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (line: string) => {
  const set = line.split(' ').map(Number)
  console.log(set.map((n, i) => {
    return (correctSet[i] ?? 0) - n
  }).join(' '))
}).on('close', () => {
  process.exit(0)
})
