import readline = require('readline')

function define (name: string, num: number) {
  meta.set(name, num)
}

function check (names: string[]): boolean {
  for (const name of names) {
    if (!meta.has(name)) {
      return false
    }
  }
  return true
}

function compare (name1: string, name2: string, op: string): boolean {
  const num1 = meta.get(name1) ?? 0
  const num2 = meta.get(name2) ?? 0
  switch (op) {
    case '<':
      return num1 < num2
    case '>':
      return num1 > num2
    default:
      return num1 === num2
  }
}

const meta: Map<string, number> = new Map()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const commands = line.split(' ')
    if (commands[0] === 'define') {
      define(commands[2] ?? '', parseInt(commands[1] ?? '0'))
    } else if (!check([
      commands[1] ?? '',
      commands[3] ?? ''
    ])) {
      console.log('undefined')
    } else {
      console.log(compare(
        commands[1] ?? '',
        commands[3] ?? '',
        commands[2] ?? ''
      )
        ? 'true'
        : 'false')
    }
  })
  .on('close', () => {
    process.exit(0)
  })
