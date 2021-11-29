import readline = require('readline')

interface Dice {
  face1: number
  face2: number
}

interface Player {
  dice1: Dice
  dice2: Dice
}

function getDiceSum (dice: Dice): number {
  return (dice.face1 + dice.face2) / 2
}

function getPlayerSum (player: Player): number {
  return getDiceSum(player.dice1) + getDiceSum(player.dice2)
}

let lineCount = 0
let gunnar: Player
let emma: Player

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount % 2 === 0) {
      const [d1Face1, d1Face2, d2Face1, d2Face2] = line.split(' ').map(Number)
      gunnar = {
        dice1: {
          face1: d1Face1 ?? 0,
          face2: d1Face2 ?? 0
        },
        dice2: {
          face1: d2Face1 ?? 0,
          face2: d2Face2 ?? 0
        }
      }
    } else {
      const [d1Face1, d1Face2, d2Face1, d2Face2] = line.split(' ').map(Number)
      emma = {
        dice1: {
          face1: d1Face1 ?? 0,
          face2: d1Face2 ?? 0
        },
        dice2: {
          face1: d2Face1 ?? 0,
          face2: d2Face2 ?? 0
        }
      }

      const g = getPlayerSum(gunnar)
      const e = getPlayerSum(emma)
      if (g > e) {
        console.log('Gunnar')
      } else if (e > g) {
        console.log('Emma')
      } else {
        console.log('Tie')
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
