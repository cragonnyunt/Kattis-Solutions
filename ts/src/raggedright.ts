import readline = require('readline')

function getRaggedness (paragraph: string[]): number {
  const maxLength = paragraph.reduce((max, line) => Math.max(max, line.length), Number.MIN_SAFE_INTEGER)
  paragraph.pop()
  return paragraph.reduce((raggedness, line) => raggedness + (maxLength - line.length) ** 2, 0)
}

const paragraph: string[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    paragraph.push(line)
  })
  .on('close', () => {
    console.log(getRaggedness(paragraph))
    process.exit(0)
  })
