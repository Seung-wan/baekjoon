let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n') //.split('\n');
input = input.slice(1)

let sum = 0

const numArray = input[0].split('')

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] === '0') continue
  sum += Number(numArray[i])
}

console.log(sum)
