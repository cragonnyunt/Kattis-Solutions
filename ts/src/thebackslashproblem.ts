import readline = require('readline')

function generateEscapes (): string[] {
  const escapes: string[] = []
  const ch1 = '!'
  for (let i = 0; i < 10; i++) {
    escapes.push(String.fromCharCode(ch1.charCodeAt(0) + i))
  }
  const ch2 = '['
  for (let i = 0; i < 3; i++) {
    escapes.push(String.fromCharCode(ch2.charCodeAt(0) + i))
  }
  return escapes
}

function escapeBackSlash (str: string, lvl: number): string {
  if (lvl === 0) {
    return str
  }
  const tmp: string[] = []
  str.split('').forEach((c) => {
    if (escapes.includes(c)) {
      tmp.push('\\')
    }
    tmp.push(c)
  })
  return escapeBackSlash(tmp.join(''), lvl - 1)
}

const escapes = generateEscapes()
let backslashLvl = 0
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 === 0) {
      backslashLvl = parseInt(line)
    } else {
      console.log(escapeBackSlash(line, backslashLvl))
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
