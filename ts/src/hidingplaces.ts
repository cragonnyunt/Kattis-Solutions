import readline = require('readline')

class ChessBoard {
  private SIZE = 8
  private cells: number[][]

  constructor () {
    this.cells = Array(this.SIZE)
      .fill([])
      .map(() => Array(this.SIZE).fill(0))
  }

  public static toPos (pos: string): [number, number] {
    return [8 - parseInt(pos.charAt(1)), pos.charCodeAt(0) - 'a'.charCodeAt(0)]
  }

  public static fromPos (x: number, y: number): string {
    return `${String.fromCharCode(y + 'a'.charCodeAt(0))}${8 - x}`
  }

  public get maxValue (): number {
    return this.cells.reduce((max, row) => Math.max(max, ...row), 0)
  }

  public get maxCells (): [number, number][] {
    const result: [number, number][] = []
    for (let x = 0; x < this.SIZE; x++) {
      for (let y = 0; y < this.SIZE; y++) {
        if (this.get(x, y) === this.maxValue) {
          result.push([x, y])
        }
      }
    }
    return result
  }

  public fill (x: number, y: number, value = 1) {
    this.set(x, y, value)

    const next: [number, number][] = []
    if (y >= 2) {
      if (x !== 0) {
        next.push([x - 1, y - 2])
      }
      if (x !== 7) {
        next.push([x + 1, y - 2])
      }
    }
    if (x <= 5) {
      if (y !== 0) {
        next.push([x + 2, y - 1])
      }
      if (y !== 7) {
        next.push([x + 2, y + 1])
      }
    }
    if (y <= 5) {
      if (x !== 0) {
        next.push([x - 1, y + 2])
      }
      if (x !== 7) {
        next.push([x + 1, y + 2])
      }
    }
    if (x >= 2) {
      if (y !== 0) {
        next.push([x - 2, y - 1])
      }
      if (y !== 7) {
        next.push([x - 2, y + 1])
      }
    }

    next.forEach(([x, y]) => this.fillNext(x, y, value))
  }

  private fillNext (x: number, y: number, value = 1) {
    if (this.get(x, y) === 0 || this.get(x, y) - value > 1) {
      this.fill(x, y, value + 1)
    }
  }

  private get (x: number, y: number): number {
    return (this.cells[x] ?? [])[y] ?? 0
  }

  private set (x: number, y: number, value: number): void {
    (this.cells[x] ?? [])[y] = value
  }
}

function generateAnswers (): Map<string, string> {
  const answers: Map<string, string> = new Map()
  for (let char = 'a'.charCodeAt(0); char <= 'h'.charCodeAt(0); char++) {
    for (let num = 1; num <= 8; num++) {
      const key = `${String.fromCharCode(char)}${num}`

      const board = new ChessBoard()
      const [x, y] = ChessBoard.toPos(key)
      board.fill(x, y)

      const value = `${board.maxValue - 1} ${board.maxCells.reduce(
        (v, c) => v.concat(`${ChessBoard.fromPos(...c)} `),
        ''
      )}`

      answers.set(key, value)
    }
  }
  return answers
}

const answers = generateAnswers()
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      console.log(answers.get(line) ?? 'NA')
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
