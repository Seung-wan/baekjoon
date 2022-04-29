const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

const beforeNumber = Number(input);

let afterNumber = input;
let count = 0;

if (afterNumber < 10) {
  afterNumber = '0' + afterNumber;
}

while (true) {
  prevNumber = afterNumber[1];
  afterNumber = String(Number(afterNumber[0]) + Number(afterNumber[1]));

  afterNumber = Number(afterNumber) < 10 ? afterNumber[0] : afterNumber[1];

  afterNumber = prevNumber + String(afterNumber);
  count++;

  if (beforeNumber === Number(afterNumber)) break;
}

console.log(count);
