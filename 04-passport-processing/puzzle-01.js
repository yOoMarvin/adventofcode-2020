const fs = require('fs')
// today: split the big blocks!
const input = fs.readFileSync('./input.txt', 'utf8').split('\n\n')

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

function solvePartOne () {
  return input.filter(passport => {
    // use a set to use unique values and a regex to extract the kv pairs
    const fields = new Set(passport.split(/[\s\n]/).map(kv => kv.split(':')[0]))
    // test if every element in the array passes the test
    return required.every(x => fields.has(x))
  }).length
}

console.log(solvePartOne())
