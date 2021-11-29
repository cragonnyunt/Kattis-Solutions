import readline = require('readline')

function decodeMsg (msg: string): string {
  const morse: string[] = []
  const lengths: number[] = []

  msg.split('').forEach((c) => {
    const index = chars.indexOf(c)
    morse.push(codes[index] ?? '')
    lengths.push(codes[index]?.length ?? 0)
  })

  const morseStr = morse.join('')
  let morseOffset = 0

  return lengths
    .reverse()
    .map((l) => {
      const index = codes.indexOf(morseStr.substr(morseOffset, l))
      morseOffset += l
      return chars[index]
    })
    .join('')
}

const chars: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '_',
  '.',
  ',',
  '?'
]

const codes: string[] = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
  '..--',
  '---.',
  '.-.-',
  '----'
]

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const msg = decodeMsg(line)
    console.log(msg)
  })
  .on('close', () => {
    process.exit(0)
  })
