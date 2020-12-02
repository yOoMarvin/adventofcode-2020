const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

let result = 0

const arr = input.map(row => {
  return row.split(' ')
})

arr.forEach(policy => {
  const range = policy[0].split('-').map(x => +x)
  const letter = policy[1].slice(0, -1)
  const pw = policy[2].split('')
  let count = 0
  pw.forEach(char => {
    if (letter === char) {
      count++
    }
  })
  if (count >= range[0] && count <= range[1]) {
    result++
  }
})

console.log('FIRST STAR: ' + result)
