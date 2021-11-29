import readline = require('readline')

function getTorque (a: number, b: number, c: number): number {
  return -((b * b) / (4 * a)) + (b * b) / (2 * a) + c
}

let lineCount = 0
let totalGears = 0
let gears = 0
let maxTorque = Number.MIN_SAFE_INTEGER
let index = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (gears === 0) {
        totalGears = gears = parseInt(line)
        maxTorque = Number.MIN_SAFE_INTEGER
        index = 0
      } else {
        const [a, b, c] = line.split(' ').map(Number)
        const torque = getTorque(a ?? 0, b ?? 0, c ?? 0)
        gears--
        if (maxTorque < torque) {
          maxTorque = torque
          index = totalGears - gears
        }
        if (gears === 0) {
          console.log(index)
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
