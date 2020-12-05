const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

// Helpers
// make the string "binary"
const toBinString = (i) => i.replace(/[B,R]/g, '1').replace(/[F,L]/g, '0')
// parse the integer in the binary system
const int = (i) => parseInt(i, 2)

// Part 1
// find the max number in the array. The array is created by mapping the input into bin strings and then converting them
const max = Math.max(...input.map(toBinString).map(int))

console.log({ max })

// Part 2
// I don't get it ...
