const [n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
arr.sort((a,b)=>a-b)
console.log(arr.join('\n'))