import readline = require('readline')

function isLeftMostOrBlocked (puzzle: string[][], i: number, j: number): boolean {
  return j === 0 || (j !== 0 && (puzzle[i] ?? [])[j - 1] === '#')
}

function isTopMostOrBlocked (puzzle: string[][], i: number, j: number): boolean {
  return i === 0 || (i !== 0 && (puzzle[i - 1] ?? [])[j] === '#')
}

function processRow (i: number, j: number, C: number, words: Set<string>) {
  if (!isLeftMostOrBlocked(puzzle, i, j)) {
    return
  }

  const w: string[] = []
  for (let k = j; k < C && (puzzle[i] ?? [])[k] !== '#'; k++) {
    w.push((puzzle[i] ?? [])[k] ?? '')
  }

  if (w.length >= 2) {
    words.add(w.join(''))
  }
}

function processColumn (i: number, j: number, R: number, words: Set<string>) {
  if (!isTopMostOrBlocked(puzzle, i, j)) {
    return
  }

  const w: string[] = []
  for (let k = i; k < R && (puzzle[k] ?? [])[j] !== '#'; k++) {
    w.push((puzzle[k] ?? [])[j] ?? '')
  }

  if (w.length >= 2) {
    words.add(w.join(''))
  }
}

function getSmallestWord (puzzle: string[][]): string {
  const words = new Set<string>()

  const R = puzzle.length
  const C = (puzzle[0] ?? []).length

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if ((puzzle[i] ?? [])[j] !== '#') {
        processRow(i, j, C, words)
        processColumn(i, j, R, words)
      }
    }
  }

  return Array.from(words).sort((a, b) => a.localeCompare(b))[0] ?? ''
}

const puzzle: string[][] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      puzzle.push(line.split(''))
    }
    lineCount++
  })
  .on('close', () => {
    console.log(getSmallestWord(puzzle))
    process.exit(0)
  })
