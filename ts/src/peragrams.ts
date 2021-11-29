import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const charMap: Map<string, number> = new Map()
    line.split('').forEach(c => {
      charMap.set(c, (charMap.get(c) ?? 0) + 11)
    })

    let chars = 0
    for (const [, count] of charMap) {
      if (count % 2 !== 0) {
        chars++
      }
    }

    console.log(Math.max(0, chars - 1))
  })
  .on('close', () => {
    process.exit(0)
  })
