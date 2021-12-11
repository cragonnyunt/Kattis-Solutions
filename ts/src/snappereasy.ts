import readline = require('readline')

function getLight (devices: number, snapTimes: number): string {
  return (snapTimes + 1) % Math.pow(2, devices) === 0 ? 'ON' : 'OFF'
}

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [devices, snapTimes] = line.split(' ').map(Number)
      console.log(
        `Case #${lineCount}: ${getLight(devices ?? 0, snapTimes ?? 0)}`
      )
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
