import readline = require('readline')

interface Time {
  hour: number
  minute: number
  second: number
}

function toSec (t: Time): number {
  return t.hour * 3600 + t.minute * 60 + t.second
}

function secDiff (t1: Time, t2: Time): number {
  const diff = toSec(t1) - toSec(t2)
  return diff <= 0 ? diff + 86400 : diff
}

function toTime (s: number): Time {
  const hour = Math.floor(s / 3600)
  const minute = Math.floor((s - hour * 3600) / 60)
  const second = s - hour * 3600 - minute * 60
  return { hour, minute, second }
}

function toString (t: Time): string {
  return `${t.hour.toString().padStart(2, '0')}:${t.minute
    .toString()
    .padStart(2, '0')}:${t.second.toString().padStart(2, '0')}`
}

let time1: Time
let time2: Time
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      const [h, m, i] = line.split(':').map(Number)
      time1 = { hour: h ?? 0, minute: m ?? 0, second: i ?? 0 }
    } else {
      const [h, m, i] = line.split(':').map(Number)
      time2 = { hour: h ?? 0, minute: m ?? 0, second: i ?? 0 }
    }
    lineCount++
  })
  .on('close', () => {
    console.log(toString(toTime(secDiff(time2, time1))))
    process.exit(0)
  })
