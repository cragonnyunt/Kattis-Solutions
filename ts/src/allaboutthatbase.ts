import readline = require('readline')

function getBases (X: string, op: string, Y: string, Z: string): string[] {
  const bases: string[] = []
  const minBase = getMinimumBase(X, Y, Z)
  for (let base = minBase; base <= maxBase; base++) {
    if (checkBase(X, op, Y, Z, base)) {
      bases.push(mapBaseToString(base))
    }
  }
  return bases
}

function getMinimumBase (X: string, Y: string, Z: string): number {
  const allLetters = X.concat(Y).concat(Z)
  const maxDigit = allLetters.split('').reduce((prev, curr) => {
    return curr > prev ? curr : prev
  })
  if (regLettersOnly.test(maxDigit)) {
    return maxDigit.charCodeAt(0) - startChar + 11
  }
  if (maxDigit === '1' && !allLetters.includes('0')) {
    return 1
  }
  return Math.max(parseInt(maxDigit) + 1, 2)
}

function checkBase (
  X: string,
  op: string,
  Y: string,
  Z: string,
  base: number
): boolean {
  const XInt = toBase10(X, base)
  const YInt = toBase10(Y, base)
  const ZInt = toBase10(Z, base)
  return checkBaseAny(XInt, op, YInt, ZInt)
}

function checkBaseAny (X: number, op: string, Y: number, Z: number): boolean {
  switch (op) {
    case '+':
      return Z === X + Y
    case '-':
      return Z + Y === X
    case '*':
      return Z === X * Y
    default:
      return Z * Y === X
  }
}

function toBase10 (num: string, base: number): number {
  const source = baseTypes.get(mapBaseToString(base)) ?? []
  return base === 1
    ? num.length // base 1
    : num
      .split('')
      .map((n) => source.indexOf(n))
      .reverse()
      .reduce((acc, curr, index) => {
        return acc + curr * Math.pow(source.length, index)
      })
}

function mapBaseToString (base: number): string {
  if (base === maxBase) {
    return '0'
  }
  return base < 10
    ? base.toString()
    : String.fromCodePoint(startChar + base - 10)
}

function generateSourceDigits (base: number): string[] {
  if (base === 1) {
    return ['1']
  }

  const baseDigits: string[] = []
  for (let i = 0; i < Math.min(base, 10); i++) {
    baseDigits.push(i.toString())
  }
  for (let i = 0; i < base - 10; i++) {
    baseDigits.push(String.fromCodePoint(startChar + i))
  }
  return baseDigits
}

function generateBaseTypes (): void {
  for (let i = 1; i <= maxBase; i++) {
    baseTypes.set(mapBaseToString(i), generateSourceDigits(i))
  }
}

let lineCount = 0
const regLettersOnly = /^[a-z]$/
const startChar = 'a'.charCodeAt(0)
const maxBase = 36
const baseTypes = new Map<string, string[]>()

generateBaseTypes()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [X, op, Y, , Z] = line.split(' ')
      const bases = getBases(X ?? '', op ?? '', Y ?? '', Z ?? '')
      console.log(`${bases.length === 0 ? 'invalid' : bases.join('')}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
