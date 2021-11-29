import readline = require('readline')

function bestBeforeDate (dates: number[]): string {
  let [min, mid, max] = dates
  min ??= 0
  mid ??= 0
  max ??= 0

  const bestDates: BestDate[] = [
    new BestDate(max, mid, min),
    new BestDate(mid, max, min),
    new BestDate(max, min, mid),
    new BestDate(min, max, mid),
    new BestDate(mid, min, max),
    new BestDate(min, mid, max)
  ]
  for (const bestDate of bestDates) {
    if (bestDate.isValid) {
      return bestDate.toString()
    }
  }
  return ''
}

class BestDate {
  day: number
  month: number
  year: number

  constructor (day: number, month: number, year: number) {
    this.day = day
    this.month = month
    this.year = (year % 2000) + 2000
  }

  public get isValid (): boolean {
    if (this.month < 1 || this.month > 12) {
      return false
    }
    const daysInMonth = [31, this.isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return this.day > 0 && this.day <= (daysInMonth[this.month - 1] ?? 30)
  }

  public toString (): string {
    return `${this.year}-${this.month.toString().padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`
  }

  private get isLeapYear (): boolean {
    return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0
  }
}

readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (line: string) => {
  const dates = line.split('/').map(Number).sort((a, b) => a - b)
  const bestBefore = bestBeforeDate(dates)
  console.log(bestBefore === '' ? `${line} is illegal` : bestBefore)
}).on('close', () => {
  process.exit(0)
})
