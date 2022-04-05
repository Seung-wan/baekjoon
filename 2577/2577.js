let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
input = input.map((item) => Number(item));
const mulNumber = input.reduce((acc, cur) => acc * cur).toString();

const array = [];
for (let i = 0; i < 10; i++) {
  let cnt = 0;
  for (let j = 0; j < mulNumber.length; j++) {
    if (mulNumber[j] === i.toString()) cnt++;
  }
  array.push(cnt);
}
array.forEach((item) => {
  console.log(+item);
});
