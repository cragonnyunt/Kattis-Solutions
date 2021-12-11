import readline = require('readline')

// majority  -> true
// minority  -> false
function getElectionResult (election: number[]): [boolean, number] {
  const maxVote = election.reduce((a, b) => Math.max(a, b))
  if (election.filter(vote => vote === maxVote).length > 1) {
    return [false, -1]
  }
  const winner = election.indexOf(maxVote) + 1
  const allVotes = election.reduce((a, b) => a + b)
  return [maxVote > allVotes / 2, winner]
}

let election: number[] = []
let candidates = 0
let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      if (candidates === 0) {
        candidates = parseInt(line)
        election = []
      } else {
        election.push(parseInt(line))
        candidates--
        if (candidates === 0) {
          const [isMajority, result] = getElectionResult(election)
          if (result === -1) {
            console.log('no winner')
          } else {
            console.log(`${isMajority ? 'majority' : 'minority'} winner ${result}`)
          }
        }
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
