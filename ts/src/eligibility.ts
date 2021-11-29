import readline = require('readline')

let lineCount = 0

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    if (lineCount > 0) {
      const [name, date, dob, c] = line.split(' ')
      const courses = parseInt(c ?? '0')
      const postYear = parseInt(date?.split('/')[0] ?? '0')
      const dobYear = parseInt(dob?.split('/')[0] ?? '0')

      if (postYear >= 2010 || dobYear >= 1991) {
        console.log('%s eligible', name)
      } else if (courses >= 41) {
        console.log('%s ineligible', name)
      } else {
        console.log('%s coach petitions', name)
      }
    }
    lineCount++
  })
  .on('close', () => {
    process.exit(0)
  })
