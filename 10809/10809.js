const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString(); //.split('\n');

const ALPHA_OBJECT = {};

for (let i = 97; i < 123; i++) {
  ALPHA_OBJECT[String.fromCharCode(i)] = -1;
}

const alphaArray = Object.keys(ALPHA_OBJECT);

for (let i = 0; i < alphaArray.length; i++) {
  const pos = input.indexOf(alphaArray[i]);
  if (pos !== -1) ALPHA_OBJECT[alphaArray[i]] = pos;
}

const countArray = Object.values(ALPHA_OBJECT);

for (let count of countArray) process.stdout.write(String(count) + ' ');
