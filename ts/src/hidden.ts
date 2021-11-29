import readline = require('readline')

function checkPassword (password: string, str: string): boolean {
  for (const s of str.split('')) {
    if (password.startsWith(s)) {
      password = password.substr(1)
    } else if (password.includes(s)) {
      break
    }
  }
  return password === ''
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [password, str] = line.split(' ')
    console.log(checkPassword(password ?? '', str ?? '') ? 'PASS' : 'FAIL')
  })
  .on('close', () => {
    process.exit(0)
  })
