import readline = require('readline')

function initializeFibo (): number[] {
  const fibo: number[] = [0, 1]
  for (let i = 2; i < 46; i++) {
    fibo.push((fibo[i - 1] ?? 0) + (fibo[i - 2] ?? 0))
  }
  return fibo
}

const fibo = initializeFibo()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const times = parseInt(line)
    console.log(`${fibo[times - 1]} ${fibo[times]}`)
  })
  .on('close', () => {
    process.exit(0)
  })
