import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [X, Y, N] = line.split(' ').map(Number)
    X ??= 1
    Y ??= 1
    N ??= 1

    for (let i = 1; i <= N; i++) {
      if (i % X === 0 && i % Y === 0) {
        console.log('FizzBuzz')
      } else if (i % X === 0) {
        console.log('Fizz')
      } else if (i % Y === 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
    }
  })
  .on('close', () => {
    process.exit(0)
  })
