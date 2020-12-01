const fs = require('fs')
const arr = fs.readFileSync('./input.txt', 'utf8').split('\n').map(x => +x)
let result = 0

for (let x = 0; x < arr.length; x++) {
  for (let y = 1; y < arr.length; y++) {
    for (let z = 2; z < arr.length; z++) {
      if (arr[x] + arr[y] + arr[z] === 2020) {
        result = arr[x] * arr[y] * arr[z]
      }
    }
  }
}

console.log('PUZZLE 02: ' + result)
