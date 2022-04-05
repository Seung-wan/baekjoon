//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');
input = input.map((item) => Number(item));
const max = Math.max(...input);
const min = Math.min(...input);
console.log(max);
console.log(input.indexOf(max) + 1);
