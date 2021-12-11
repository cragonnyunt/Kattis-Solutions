import readline = require('readline')

interface alarm {
  hour: number
  minute: number
}

function set45Before (alarm: alarm): alarm {
  const newAlarm: alarm = {
    hour: alarm.hour,
    minute: alarm.minute - 45
  }
  if (newAlarm.minute < 0) {
    return set45BeforeMinute(newAlarm)
  }
  return newAlarm
}

function set45BeforeMinute (alarm: alarm): alarm {
  const newAlarm: alarm = {
    hour: alarm.hour - 1,
    minute: alarm.minute + 60
  }
  if (newAlarm.hour < 0) {
    return set45BeforeHour(newAlarm)
  }
  return newAlarm
}

function set45BeforeHour (alarm: alarm): alarm {
  return {
    hour: alarm.hour + 24,
    minute: alarm.minute
  }
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [hour, minute] = line.split(' ').map(Number)
    const alarm: alarm = { hour: hour ?? 0, minute: minute ?? 0 }
    const alarm45Before: alarm = set45Before(alarm)
    console.log(`${alarm45Before.hour} ${alarm45Before.minute}`)
  })
  .on('close', () => {
    process.exit(0)
  })
