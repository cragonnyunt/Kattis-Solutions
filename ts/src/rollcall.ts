import readline = require('readline')

interface Student {
  firstName: string
  lastName: string
}

function sortStudents (students: Student[]): void {
  students.sort((a, b) => {
    const lastNameCmp = a.lastName.localeCompare(b.lastName)
    return lastNameCmp !== 0
      ? lastNameCmp
      : a.firstName.localeCompare(b.firstName)
  })
}

function isUniqueFirstName (students: Student[], student: Student): boolean {
  return students.filter(s => s.firstName === student.firstName).length === 1
}

const students: Student[] = []

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout
  })
  .on('line', (line: string) => {
    let [firstName, lastName] = line.split(' ')
    firstName ??= ''
    lastName ??= ''
    students.push({ firstName, lastName })
  })
  .on('close', () => {
    sortStudents(students)
    students.forEach((student) => {
      student.lastName = isUniqueFirstName(students, student)
        ? ''
        : student.lastName
    })
    students.forEach((student) => {
      console.log(`${student.firstName} ${student.lastName}`)
    })
    process.exit(0)
  })
