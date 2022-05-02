let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const mulNumber = input.reduce((acc, cur) => acc * cur).toString();

const obj = {};

for (let i = 0; i < 10; i++) {
  obj[i] = 0;
}

for (let number of mulNumber) {
  obj[number] += 1;
}

for (let value of Object.values(obj)) console.log(value);
