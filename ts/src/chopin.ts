import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    lineCount++

    let [note, tonality] = line.split(' ')
    note ??= ''
    tonality ??= ''

    if (note.length === 1) {
      console.log(`Case ${lineCount}: UNIQUE`)
    } else {
      let ch: string
      switch (note) {
        case 'G#':
          ch = 'A'
          break
        case 'Ab':
          ch = 'G'
          break
        default:
          ch = String.fromCharCode(
            note.charCodeAt(0) + (note.charAt(1) === '#' ? 1 : -1)
          )
          break
      }
      console.log(
        `Case ${lineCount}: ${ch}${
          note.charAt(1) === '#' ? 'b' : '#'
        } ${tonality}`
      )
    }
  })
  .on('close', () => {
    process.exit(0)
  })
