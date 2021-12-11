import readline = require('readline')

function generateKeyboard (): Map<string, number> {
  const keyboard = new Map<string, number>()
  keyboard.set(' ', 0)
  keyboard.set('abc', 2)
  keyboard.set('def', 3)
  keyboard.set('ghi', 4)
  keyboard.set('jkl', 5)
  keyboard.set('mno', 6)
  keyboard.set('pqrs', 7)
  keyboard.set('tuv', 8)
  keyboard.set('wxyz', 9)
  return keyboard
}

function getKeyPresses (str: string): string[] {
  const presses: string[] = []
  str.split('').forEach(char => {
    const newKeyPress = getKeyPress(char)
    if (presses.length === 0) {
      presses.push(newKeyPress)
    } else {
      const lastKeyPress = getLastKeyPress(presses)
      if (lastKeyPress.charAt(0) === newKeyPress.charAt(0)) {
        presses.push(newKeyPress)
      } else {
        presses.push([presses.pop(), newKeyPress].join(''))
      }
    }
  })
  return presses
}

function getKeyPress (str: string): string {
  for (const [key, value] of keyboard) {
    if (key.includes(str)) {
      const index = key.indexOf(str)
      return value.toString().repeat(index + 1)
    }
  }
  return ''
}

function getLastKeyPress (presses: string[]): string {
  const lastStr = presses[presses.length - 1]
  return lastStr?.charAt(lastStr.length - 1) ?? ''
}

let lineCount = 0
const keyboard = generateKeyboard()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(`Case #${lineCount}: ${getKeyPresses(line).join(' ')}`)
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
