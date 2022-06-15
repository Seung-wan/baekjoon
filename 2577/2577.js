const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n')

const mulNumber = String(input[0] * input[1] * input[2])

const obj = {}

for (let i = 0; i < 10; i++) {
  obj[i] = 0
}

for (let number of mulNumber) {
  obj[Number(number)] += 1
}

for (let value of Object.values(obj)) console.log(value)
