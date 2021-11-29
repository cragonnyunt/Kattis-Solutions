import readline = require('readline')

function toRadians (degrees: number): number {
  return degrees * Math.PI / 180
}

function getLength (height: number, angle: number): number {
  return Math.ceil(height / Math.sin(toRadians(angle)))
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [height, degree] = line.split(' ').map(Number)
    console.log(getLength(height ?? 0, degree ?? 0))
  })
  .on('close', () => {
    process.exit(0)
  })
