import readline = require('readline')

function syncList (l1: number[], l2: number[]): number[] {
  const l1Bak = l1.slice()

  l1.sort((a, b) => a - b)
  l2.sort((a, b) => a - b)
  const sync = new Map<number, number>()
  l1.forEach((value, index) => sync.set(value, l2[index] ?? 0))
  return l1Bak.map(value => sync.get(value) ?? 0)
}

let count = 0
let list1: number[] = []
let list2: number[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (count === 0) {
      if (line === '0') {
        process.exit(0)
      }
      count = parseInt(line)
    } else {
      if (list1.length < count) {
        list1.push(parseInt(line))
      } else {
        list2.push(parseInt(line))
      }

      if (list1.length === list2.length) {
        const sync = syncList(list1, list2)
        console.log(sync.join('\n'))
        console.log('')

        list1 = []
        list2 = []
        count = 0
      }
    }
  })
  .on('close', () => {
    process.exit(0)
  })
