import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [empty, found, drink] = line.split(' ').map(Number)
    empty ??= 0
    found ??= 0
    drink ??= 0

    const bottles = empty + found
    if (bottles < drink) {
      console.log(0)
    } else {
      const soda = Math.floor((bottles - 1) / (drink - 1))
      console.log(soda)
    }
  })
  .on('close', () => {
    process.exit(0)
  })
