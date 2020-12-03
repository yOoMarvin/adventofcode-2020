const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

// PART 1
function findTrees (x, y) {
  let ind = 0
  let count = 0
  input.forEach((str, i) => {
    if (i % y === 0) {
      count += str[ind % str.length] === '#'
      ind += x
    }
  })
  return count
}

console.log(findTrees(3, 1))

// PART 2
function findTotalTrees (fn, coords) {
  return coords.reduce((acc, curr) => {
    return acc * fn(curr[0], curr[1])
  }, 1)
}

const coordinates = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

console.log(findTotalTrees(findTrees, coordinates))
