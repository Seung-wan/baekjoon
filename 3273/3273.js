//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map((arr) => Number(arr));
console.log(arr);
const k = Number(input[2]);

let count = 0;
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] + arr[j] === k) count++;
  }
}
console.log(count);
