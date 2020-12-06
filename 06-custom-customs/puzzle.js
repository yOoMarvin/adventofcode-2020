const fs = require('fs')
const groups = fs.readFileSync('./input.txt', { encoding: 'utf-8' }).split('\n\n').filter(x => x)

let total = 0
let part2 = 0

for (const group of groups) {
  // concat all strings in a group by replacing the line break and save the unique chars in a Set
  const uniques = new Set([...group.replace(/\n/g, '')])
  total += uniques.size

  // part 2 here
  part2 += [...uniques].filter(char => group.split('\n').filter(x => x).every(form => form.includes(char))).length
}

console.log(total)
console.log(part2)
