import readline = require('readline')

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [peoples, chickens] = line.split(' ').map(Number)
    const diff = (chickens ?? 0) - (peoples ?? 0)
    let str = 'Dr. Chaz needs %s more piece%s of chicken!'
    if (diff > 0) {
      str = 'Dr. Chaz will have %s piece%s of chicken left over!'
    }
    console.log(str, Math.abs(diff), Math.abs(diff) > 1 ? 's' : '')
  })
  .on('close', () => {
    process.exit(0)
  })
