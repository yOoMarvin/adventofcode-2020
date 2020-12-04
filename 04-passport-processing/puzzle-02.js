const fs = require('fs')
// today: split the big blocks!
const input = fs.readFileSync('./input.txt', 'utf8').split('\n\n')

/*
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
  If cm, the number must be at least 150 and at most 193.
  If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
*/

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const rules = {
  byr: /^(19[2-9]\d)|(200[0-2])$/,
  iyr: /^20((1\d)|(20))$/,
  eyr: /^20((2\d)|(30))$/,
  hgt: /^((1[5-8]\dcm)|(19[0-3]cm)|((59)|(6\d)|(7[0-6]))in)$/,
  hcl: /^#[\da-f]{6}$/,
  ecl: /^(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)$/,
  pid: /^\d{9}$/,
  cid: /./
}

function solvePartTwo () {
  return input.filter(passport => {
    const kv = passport.split(/[\s\n]/).map(kv => kv.split(':'))
    const fields = new Map(kv)

    // Count required fields
    if (!(required.every(x => fields.has(x)))) return false

    // Field validation
    return kv.every(([key, value]) => value.match(rules[key]))
  }).length
}

console.log(solvePartTwo())
