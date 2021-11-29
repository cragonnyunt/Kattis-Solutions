import readline = require('readline')

function generateFactorials (): Array<bigint> {
  const factorials: bigint[] = [BigInt(1), BigInt(1)]
  for (let i = 2; i < 50; i++) {
    factorials[i] = (factorials[i - 1] ?? BigInt(1)) * BigInt(i)
  }
  return factorials
}

function getPermutationName (k: bigint, n: number): string {
  if (n === 1) {
    return '1'
  }

  const permutationList: number[] = [...Array(n).keys()].map((i) => i + 1)
  if (k === BigInt(0)) {
    return permutationList.join(' ')
  } else if (k === BigInt(1)) {
    const length = permutationList.length
    ;[permutationList[length - 1], permutationList[length - 2]] = [
      permutationList[length - 2] ?? 0,
      permutationList[length - 1] ?? 0
    ]
    return permutationList.join(' ')
  }

  const str: string[] = []

  do {
    const factN = factorials[n-- - 1] ?? BigInt(1)
    const count = Number(k / factN)
    str.push(permutationList[count]?.toString() ?? '')
    permutationList.splice(count, 1)
    k %= factN
  } while (permutationList.length !== 0)

  return str.join(' ')
}

const factorials = generateFactorials()

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [n, k] = line.split(' ')
    console.log(getPermutationName(BigInt(k ?? 0), parseInt(n ?? '0')))
  })
  .on('close', () => {
    process.exit(0)
  })
