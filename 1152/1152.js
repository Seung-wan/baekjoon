const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

let wordCount = 0;

for (let word of input) {
  if (word) wordCount++;
}

console.log(wordCount);
