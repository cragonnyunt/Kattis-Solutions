import readline = require('readline')

class Club {
  men: number
  women: number
  indexes: number[]

  constructor (men = 0, women = 0) {
    this.men = men
    this.women = women
    this.indexes = []
  }

  get more (): string {
    return this.men > this.women ? 'M' : 'W'
  }

  get total (): number {
    return this.men + this.women
  }

  get diff (): number {
    return Math.abs(this.men - this.women)
  }

  get maxIndex (): number {
    return Math.max(...this.indexes)
  }

  letIn (gender: string, index: number): boolean {
    if (this.includes(index)) {
      return false
    }
    if (gender === 'M') {
      this.men++
    } else {
      this.women++
    }
    this.indexes.push(index)
    return true
  }

  private includes (index: number): boolean {
    return this.indexes.includes(index)
  }
}

let lineCount = 0
let largestDiff = 0
let queue: string[] = []
const club = new Club()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      largestDiff = parseInt(line)
    } else {
      queue = line.split('')
    }
    lineCount++
  })
  .on('close', () => {
    let index = 0
    while (index < queue.length) {
      if (club.diff < largestDiff) {
        club.letIn(queue[index] ?? '', index)
        index++
      } else if (club.diff === largestDiff) {
        if (index - club.maxIndex > 2) {
          break
        }
        if (club.more !== queue[index] && club.letIn(queue[index] ?? '', index)) {
          index--
          continue
        }
        index++
      } else {
        break
      }
    }
    console.log(club.total)

    process.exit(0)
  })
