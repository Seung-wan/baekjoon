const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');

const firstNumber = Number(input[0].split('').reverse().join(''));
const secondNumber = Number(input[1].split('').reverse().join(''));

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else {
  console.log(secondNumber);
}
