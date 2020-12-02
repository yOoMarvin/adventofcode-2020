const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

let result = 0

const arr = input.map(row => {
  return row.split(' ')
})

arr.forEach(policy => {
  const [lowerMatch, upperMatch] = policy[0].split('-').map(x => +x)
  const letter = policy[1].slice(0, -1)
  const pw = policy[2]
  // use XOR here
  if (pw[lowerMatch - 1] === letter ^ pw[upperMatch - 1] === letter) {
    result++
  }
})

console.log('SECOND STAR: ' + result)
