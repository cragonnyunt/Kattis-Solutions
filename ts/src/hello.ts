import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('close', () => {
    console.log('Hello World!')
    process.exit(0)
  })
