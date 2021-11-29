import readline = require('readline')

const report: Map<string, number> = new Map()
let days = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (line === 'OPEN') {
      report.clear()
    } else if (line === 'CLOSE') {
      days++
      console.log(`Day ${days}`)
      const sortedNames = [...report.keys()].sort()
      for (const name of sortedNames) {
        console.log(`${name} $${((report.get(name) ?? 0) * 0.1).toFixed(2)}`)
      }
      console.log('')
    } else {
      let [action, name, time] = line.split(' ')

      name ??= ''
      const prevTime = report.get(name) ?? 0
      const t = parseInt(time ?? '0')

      report.set(name, prevTime + (action === 'EXIT' ? t : -t))
    }
  })
  .on('close', () => {
    process.exit(0)
  })
