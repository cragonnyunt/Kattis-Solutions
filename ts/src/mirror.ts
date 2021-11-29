import readline = require('readline')

function reverseImage (image: string[][]): string[][] {
  return image.reverse().map(row => row.reverse())
}

function printImage (image: string[][]): void {
  image.forEach(row => console.log(row.join('')))
}

let lineCount = 0
let height = 0
let image: string[][] = []
let cases = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (height === 0) {
        const [row] = line.split(' ').map(Number)
        height = row ?? 0
        image = []
        cases++
      } else {
        image.push(line.split('') as string[])
        height--
        if (height === 0) {
          console.log(`Test ${cases}`)
          printImage(reverseImage(image))
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
