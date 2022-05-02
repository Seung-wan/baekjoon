let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
input = input.map((item) => Number(item));
const DIV_NUMBER = 42;

const SET = new Set();

for (let num of input) {
  SET.add(num % DIV_NUMBER);
}
console.log(SET.size);

/**
 * 백준 제출시 readFIleSync 경로 변경
 * /dev/stdin
 */
