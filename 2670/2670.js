let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
console.log(input);
input = input.map((item) => Number(item));

const [num, ...floatList] = input;
const dp = [...floatList];

let answer = 0;

for (let i = 1; i < floatList.length; i++) {
  console.log(dp[i]);
  dp[i] = Math.max(floatList[i], dp[i - 1] * floatList[i]);
}

answer = Math.max(...dp);

console.log(answer.toFixed(3));

// for (let i = 0; i < num - 1; i++) {
//   let mulMax = floatList[i];
//   let temp = floatList[i];
//   for (let j = i + 1; j < num; j++) {
//     console.log('mulMax = ', mulMax);
//     console.log('temp = ', temp);
//     if (mulMax < temp * floatList[j]) {
//       mulMax = temp * floatList[j];
//       temp *= floatList[j];
//     } else if (mulMax > temp * floatList[j]) {
//       temp = temp * floatList[j];
//     }
//   }
//   // console.log('mulMax = ', mulMax);
//   if (answer < mulMax) answer = mulMax;
// }
