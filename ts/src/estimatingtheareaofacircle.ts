import readline = require('readline')

function getArea (
  radius: number,
  marks: number,
  circle: number
): [number, number] {
  const area = Math.PI * radius * radius
  const estArea = (Math.pow(2 * radius, 2) * circle) / marks
  return [area, estArea]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '0 0 0') {
      process.exit(0)
    }
    const [radius, marks, circle] = line.split(' ').map(Number)
    console.log(...getArea(radius ?? 0, marks ?? 0, circle ?? 0))
  })
  .on('close', () => {
    process.exit(0)
  })
