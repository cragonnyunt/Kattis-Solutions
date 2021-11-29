import readline = require('readline')

function getSizeAndBreaks (sample: number): number[] {
  const pow = Math.log2(sample)
  if (Number.isInteger(pow)) {
    return [sample, 0]
  }
  const sampleBase2 = sample.toString(2)
  return [Math.pow(2, Math.ceil(pow)), sampleBase2.lastIndexOf('1') + 1]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const sample = parseInt(line)
    console.log(...getSizeAndBreaks(sample))
  })
  .on('close', () => {
    process.exit(0)
  })
