import readline = require('readline')

class Schedule {
  hour: number
  minute: number
  meridiem: string

  constructor (time: string) {
    const timeArr = time.split(' ')
    this.meridiem = timeArr[1] ?? ''
    ;[this.hour, this.minute] = (timeArr[0] ?? '').split(':').map(Number) as [
      number,
      number
    ]
  }

  public toString (): string {
    return `${this.hour}:${this.minute.toString().padStart(2, '0')} ${
      this.meridiem
    }`
  }

  static sort (a: Schedule, b: Schedule): number {
    if (a.meridiem !== b.meridiem) {
      return a.meridiem.localeCompare(b.meridiem)
    }
    if (a.hour === b.hour) {
      return a.minute - b.minute
    }
    if (a.hour === 12) {
      return -1
    }
    if (b.hour === 12) {
      return 1
    }
    return a.hour - b.hour
  }
}

const digitsOnly = /^\d+$/
let schedules: Schedule[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (digitsOnly.test(line)) {
      if (schedules.length > 0) {
        for (const schedule of schedules.sort(Schedule.sort)) {
          console.log(schedule.toString())
        }
        console.log()
      }
      const schedulesCount = parseInt(line)
      if (schedulesCount === 0) {
        process.exit(0)
      }
      schedules = []
    } else {
      schedules.push(new Schedule(line))
    }
  })
  .on('close', () => {
    process.exit(0)
  })
