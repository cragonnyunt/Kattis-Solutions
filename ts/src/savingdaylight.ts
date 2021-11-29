import readline = require('readline')

interface Time {
  hour: number
  minute: number
}

function toMinutes (time: Time): number {
  return time.hour * 60 + time.minute
}

function parseTime (time: string): Time {
  const [hour, minute] = time.split(':').map(Number)
  return { hour: hour ?? 0, minute: minute ?? 0 }
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [m, d, y, str1, str2] = line.split(' ')
    const [t1, t2] = [parseTime(str1 ?? ''), parseTime(str2 ?? '')]
    const tDiff = toMinutes(t2) - toMinutes(t1)
    console.log(`${m} ${d} ${y} ${Math.floor(tDiff / 60)} hours ${tDiff % 60} minutes`)
  })
  .on('close', () => {
    process.exit(0)
  })
