import readline = require('readline')

function getFoxSaid (sounds: string[], animalSounds: string[]): string[] {
  animalSounds.forEach(sound => {
    sounds = sounds.filter(s => s !== sound)
  })
  return sounds
}

let sounds: string[] = []
let animalSounds: string[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (line === 'what does the fox say?') {
        console.log(getFoxSaid(sounds, animalSounds).join(' '))
        sounds = []
        animalSounds = []
      } else {
        const lineArray = line.split(' ')
        if (lineArray.length === 3 && lineArray[1] === 'goes') {
          animalSounds.push(lineArray[2] ?? '')
        } else {
          sounds.push(...lineArray)
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
