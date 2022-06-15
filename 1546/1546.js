let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
const length = Number(input[0])
const numberArray = input[1].split(' ').map((item) => Number(item))

console.log('numberArray = ', numberArray)

const M = Math.max(...numberArray)

const convertedArray = numberArray.map((num) => {
  return (num / M) * 100
})

console.log('convertedArray = ', convertedArray)

const average = convertedArray.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log(average / length)

// input = input.map((item) => Number(item))

/**
 * 백준 제출시 readFIleSync 경로 변경
 * /dev/stdin
 */

// 225  = 50 + 80 + 75
