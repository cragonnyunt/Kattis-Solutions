import readline = require('readline')

function generatePuzzle (): string[][] {
  const puzzle: string[][] = []
  for (let i = 0; i < h; i++) {
    const row: string[] = []

    let ch = startPixel(i)
    for (let j = 0; j < w; j++) {
      row.push(ch)
      ch = altPixel(ch)
    }

    puzzle.push(row)
  }
  return puzzle
}

function insertWords (puzzle: string[][]): string[][] {
  for (let i = offh; i < h; i++) {
    const row = puzzle[i] ?? []
    const word = words[i - offh] ?? ''
    for (let j = offw; j < offw + word.length; j++) {
      row.splice(j, 1, word[j - offw] ?? '')
    }
  }
  return puzzle
}

function startPixel (i: number): string {
  return i % 2 === 0 ? '#' : '.'
}

function altPixel (ch: string): string {
  return ch === '#' ? '.' : '#'
}

let w = 0
let h = 0
let offw = 0
let offh = 0
const words: string[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      const [m, n] = line.split(' ').map(Number)
      w += n ?? 0
      h += m ?? 0
    } else if (lineCount === 1) {
      const [u, l, r, d] = line.split(' ').map(Number)
      offh = u ?? 0
      offw = l ?? 0
      w += offw + (r ?? 0)
      h += offh + (d ?? 0)
    } else {
      words.push(line)
    }
    lineCount++
  })
  .on('close', () => {
    insertWords(generatePuzzle()).forEach(row => {
      console.log(row.join(''))
    })
    process.exit(0)
  })
