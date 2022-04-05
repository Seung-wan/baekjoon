const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let [hour, minute] = input[0].split(' ');

hour = Number(hour);
minute = Number(minute);
const time = Number(input[1]);

const countHour = Math.floor(time / 60);
const countMinute = time % 60;

if (minute + countMinute >= 60) {
  hour += countHour + 1;
  minute = (minute + countMinute) % 60;
} else {
  hour += countHour;
  minute += countMinute;
}
if (hour >= 24) hour = hour % 24;

console.log(hour, minute);
