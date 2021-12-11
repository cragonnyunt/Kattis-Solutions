import readline = require('readline')

function getScore (cards: string[]): number {
  let T = 0; let C = 0; let G = 0
  cards.forEach(card => {
    if (card.startsWith('C')) {
      C++
    } else if (card.startsWith('T')) {
      T++
    } else if (card.startsWith('G')) {
      G++
    }
  })
  return T * T + C * C + G * G + 7 * Math.min(T, C, G)
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    console.log(getScore(line.split('')))
  })
  .on('close', () => {
    process.exit(0)
  })
