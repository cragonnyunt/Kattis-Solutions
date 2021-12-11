import readline = require('readline')

enum DoorState {
  Entry = 'entry',
  Exit = 'exit',
}

const room: Set<string> = new Set()

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [state, name] = line.split(' ')
      if (state === DoorState.Entry) {
        if (room.has(name ?? '')) {
          console.log(`${name} entered (ANOMALY)`)
        } else {
          room.add(name ?? '')
          console.log(`${name} entered`)
        }
      } else if (state === DoorState.Exit) {
        if (room.has(name ?? '')) {
          room.delete(name ?? '')
          console.log(`${name} exited`)
        } else {
          console.log(`${name} exited (ANOMALY)`)
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
