const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n').slice(1);

for (let i = 0; i < input.length; i++) {
  const [count, str] = input[i].split(' ');

  let tempStr = '';

  for (let i = 0; i < str.length; i++) {
    tempStr += str[i].repeat(count);
  }

  console.log(tempStr);
}

/**
 * 백준 제출시 readFIleSync 경로 변경
 * /dev/stdin
 */
