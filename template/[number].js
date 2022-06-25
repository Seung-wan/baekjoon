const fs = require('fs');
const input = fs.readFileSync('input.txt').toString(); //.split('\n');
input = input.map((item) => Number(item));

/**
 * 백준 제출시 readFIleSync 경로 변경
 * /dev/stdin
 */
