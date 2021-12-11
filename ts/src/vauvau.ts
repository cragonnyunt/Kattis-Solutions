import readline = require('readline')

interface Dog {
  barkTime: number
  restTime: number
}

function getAttackList (dogs: Dog[], maxTime: number): number[] {
  let result = Array<number>(maxTime).fill(0)
  dogs.forEach(dog => {
    result = getDogAttacks(result, dog)
  })
  return result
}

function getDogAttacks (list: number[], dog: Dog): number[] {
  const result: number[] = []

  let isAttack = true
  let count = dog.barkTime
  for (let i = 0; i < list.length; i++) {
    result[i] = (list[i] ?? 0) + (isAttack ? 1 : 0)
    if (--count === 0) {
      isAttack = !isAttack
      count = isAttack ? dog.barkTime : dog.restTime
    }
  }

  return result
}

const dogs: Dog[] = []
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount === 0) {
      const [A, B, C, D] = line.split(' ').map(Number)
      dogs.push({ barkTime: A ?? 0, restTime: B ?? 0 })
      dogs.push({ barkTime: C ?? 0, restTime: D ?? 0 })
    } else {
      const arrival = line.split(' ').map(Number)
      const attacks = getAttackList(dogs, Math.max(...arrival))
      arrival.forEach((time) => {
        switch (attacks[time - 1]) {
          case 0:
            console.log('none')
            break
          case 1:
            console.log('one')
            break
          default:
            console.log('both')
            break
        }
      })
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
