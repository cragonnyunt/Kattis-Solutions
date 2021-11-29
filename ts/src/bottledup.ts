import readline = require('readline')

function oilFill (
  volume: number,
  bottle1: number,
  bottle2: number
): [number, number] {
  let [size1, size2] = [0, 0]
  for (let trySize1 = 0; trySize1 <= volume / bottle1; trySize1++) {
    const trySize2 = (volume - bottle1 * trySize1) / bottle2
    if (
      trySize2 % 1 === 0 &&
      (trySize1 + trySize2 < size1 + size2 || size1 + size2 === 0)
    ) {
      [size1, size2] = [trySize1, trySize2]
    }
  }
  return [size1, size2]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [volume, bottle1, bottle2] = line.split(' ').map(Number)
    const [size1, size2] = oilFill(volume ?? 0, bottle1 ?? 0, bottle2 ?? 0)
    if (size1 + size2 > 0) {
      console.log(`${size1} ${size2}`)
    } else {
      console.log('Impossible')
    }
  })
  .on('close', () => {
    process.exit(0)
  })
