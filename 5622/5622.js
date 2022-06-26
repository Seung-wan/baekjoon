const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const ALPHA_ARRAY = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S'],
  ['T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z'],
];

let sec = 0;

for (let i = 65; i < 91; i++) {
  ALPHA_ARRAY.push(String.fromCharCode(i));
}

for (let str of input) {
  for (let i = 0; i < ALPHA_ARRAY.length; i++) {
    if (ALPHA_ARRAY[i].includes(str)) {
      sec += 3 + i;
      break;
    }
  }
}

console.log(sec);

// ABC 3초,  012  3 + 3으로 나눈 값
// DEF 4초,  345
// GHI 5초   678
