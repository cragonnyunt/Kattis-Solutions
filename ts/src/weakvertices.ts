import readline = require('readline')

function printWeakVertices (graph: number[][]): void {
  console.log(
    graph
      .map((row, index) => {
        const isNotWeak = row
          .map((value, index) => (value === 1 ? index : null))
          .filter((value) => value !== null)
          .some((value, _, array) => {
            for (let i = 0; i < array.length; i++) {
              if (
                value !== array[i] &&
                isConnected(graph, value ?? 0, array[i] ?? 0)
              ) {
                return true
              }
            }
            return false
          })
        return !isNotWeak ? index : null
      })
      .filter((value) => value !== null)
      .join(' ')
  )
}

function isConnected (graph: number[][], node1: number, node2: number): boolean {
  return (graph[node1] ?? [])[node2] === 1
}

let vertices = 0
let graph: number[][] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === '-1') {
      if (graph.length > 0) {
        printWeakVertices(graph)
      }
      process.exit(0)
    }
    if (vertices === 0) {
      if (graph.length > 0) {
        printWeakVertices(graph)
      }
      graph = []
      vertices = parseInt(line)
    } else {
      const lineArray = line.split(' ').map(Number)
      graph.push(lineArray)
      vertices--
    }
  })
  .on('close', () => {
    process.exit(0)
  })
