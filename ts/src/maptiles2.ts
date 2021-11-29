import readline = require('readline')

function convertTiles (quadkey: string): [number, number, number] {
  const zoom = quadkey.length
  let [xStart, xEnd] = [0, Math.pow(2, zoom) - 1]
  let [yStart, yEnd] = [xStart, xEnd]

  quadkey.split('').forEach((quad) => {
    switch (quad) {
      case '0':
        xEnd = (xEnd + xStart - 1) / 2
        yEnd = (yEnd + yStart - 1) / 2
        break
      case '1':
        xStart = (xStart + xEnd + 1) / 2
        yEnd = (yEnd + yStart - 1) / 2
        break
      case '2':
        xEnd = (xEnd + xStart - 1) / 2
        yStart = (yStart + yEnd + 1) / 2
        break
      default:
        xStart = (xStart + xEnd + 1) / 2
        yStart = (yStart + yEnd + 1) / 2
        break
    }
  })

  return [zoom, xStart, yStart]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(convertTiles(line).join(' '))
  })
  .on('close', () => {
    process.exit(0)
  })
