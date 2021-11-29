import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [dice1, dice2] = line.split(' ').map(Number)
    dice1 ??= 0
    dice2 ??= 0

    const [min, max] = [Math.min(dice1, dice2), Math.max(dice1, dice2)]
    console.log(
      Array.from({ length: max - min + 1 }, (_, i) => min + i + 1).join('\n')
    )
  })
  .on('close', () => {
    process.exit(0)
  })
