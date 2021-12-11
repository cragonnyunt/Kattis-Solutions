import readline = require('readline')

function getPartialBoxes (boxes: number[], heights: number[]): number[] {
  const totalSum = boxes.reduce((a, b) => a + b)

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        const partialSum = (boxes[i] ?? 0) + (boxes[j] ?? 0) + (boxes[k] ?? 0)
        const anotherSum = totalSum - partialSum
        if (heights.includes(partialSum) && heights.includes(anotherSum)) {
          return [boxes[i] ?? 0, boxes[j] ?? 0, boxes[k] ?? 0]
        }
      }
    }
  }
  return [0, 0, 0]
}

function getAnotherBoxes (boxes: number[], partial: number[]): number[] {
  return boxes.filter((item) => !partial.includes(item))
}

function orderBoxes (
  boxes1: number[],
  boxes2: number[],
  heights: number[]
): number[][] {
  const sum1 = boxes1.sort((a, b) => b - a).reduce((a, b) => a + b)
  const sum2 = boxes2.sort((a, b) => b - a).reduce((a, b) => a + b)
  if (sum1 === heights[0] && sum2 === heights[1]) {
    return [boxes1, boxes2]
  }
  return [boxes2, boxes1]
}

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    const [b1, b2, b3, b4, b5, b6, h1, h2] = line.split(' ').map(Number)
    const boxes = [b1 ?? 0, b2 ?? 0, b3 ?? 0, b4 ?? 0, b5 ?? 0, b6 ?? 0]
    const [pb1, pb2, pb3] = getPartialBoxes(boxes, [h1 ?? 0, h2 ?? 0])
    const [pb4, pb5, pb6] = getAnotherBoxes(boxes, [
      pb1 ?? 0,
      pb2 ?? 0,
      pb3 ?? 0
    ])
    const [boxes1, boxes2] = orderBoxes(
      [pb1 ?? 0, pb2 ?? 0, pb3 ?? 0],
      [pb4 ?? 0, pb5 ?? 0, pb6 ?? 0],
      [h1 ?? 0, h2 ?? 0]
    )
    console.log(`${boxes1?.join(' ')} ${boxes2?.join(' ')}`)
  })
  .on('close', () => {
    process.exit(0)
  })
