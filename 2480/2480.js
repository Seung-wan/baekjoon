const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let [num1, num2, num3] = input[0].split(' ').sort();
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

if (num1 === num2 && num2 === num3 && num1 === num3) {
  console.log(10000 + num1 * 1000);
} else {
  if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log(1000 + num2 * 100);
  } else {
    const maxNumber = Math.max(num1, num2, num3);
    console.log(maxNumber * 100);
  }
}
