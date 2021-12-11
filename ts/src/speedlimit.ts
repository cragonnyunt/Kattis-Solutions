import readline = require('readline')

interface SpeedRecord {
  speed: number
  time: number
}

function calculateDistance (speedRecords: SpeedRecord[]): number {
  let distance = 0
  let lastTime = 0
  speedRecords.forEach(speedRecord => {
    distance += speedRecord.speed * (speedRecord.time - lastTime)
    lastTime = speedRecord.time
  })
  return distance
}

let speedRecords: SpeedRecord[] = []
const letterOnly = /^(-?)[0-9]+$/

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (letterOnly.test(line)) {
      if (speedRecords.length !== 0) {
        console.log(`${calculateDistance(speedRecords)} miles`)
      }
      if (line === '-1') {
        process.exit(0)
      }
      speedRecords = []
    } else {
      let [speed, time] = line.split(' ').map(Number)
      speed ??= 0
      time ??= 0

      speedRecords.push({ speed, time })
    }
  })
  .on('close', () => {
    process.exit(0)
  })
