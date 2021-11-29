import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      let [v0, theta, x, h1, h2] = line.split(' ').map(Number)
      v0 ??= 0
      theta = (theta ?? 0) * Math.PI / 180
      x ??= 0
      h1 ??= 0
      h2 ??= 0

      const t = x / (v0 * Math.cos(theta))
      const y = v0 * t * Math.sin(theta) - 4.9 * t * t
      console.log((y + 1 > h2 || y - 1 < h1) ? 'Not Safe' : 'Safe')
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
