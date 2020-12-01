const fs = require('fs')
const arr = fs.readFileSync('./input.txt', 'utf8').split('\n').map(x => +x)
let result = 0

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 2020) {
      result = arr[i] * arr[j]
      break
    }
  }
}

console.log('PUZZLE 01: ' + result)
