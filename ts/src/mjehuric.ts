import readline = require('readline')

type Mjehuric = [number, number, number, number, number]

function isSorted (mjehuric: Mjehuric): boolean {
  const [a, b, c, d, e] = mjehuric
  return a === 1 && b === 2 && c === 3 && d === 4 && e === 5
}

function printSort (mjehuric: Mjehuric): void {
  let index = 0
  while (!isSorted(mjehuric)) {
    if ((mjehuric[index] ?? 0) > (mjehuric[index + 1] ?? 0)) {
      [mjehuric[index], mjehuric[index + 1]] = [
        mjehuric[index + 1] ?? 0,
        mjehuric[index] ?? 0
      ]
      console.log(mjehuric.join(' '))
    }
    index = ++index % 4
  }
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [a, b, c, d, e] = line.split(' ').map(Number)
    const pieces: Mjehuric = [a ?? 0, b ?? 0, c ?? 0, d ?? 0, e ?? 0]
    printSort(pieces)
  })
  .on('close', () => {
    process.exit(0)
  })
