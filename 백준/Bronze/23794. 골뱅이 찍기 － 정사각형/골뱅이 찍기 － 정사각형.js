const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input)

console.log("@".repeat(num+2))
for(let i =0; i<num; i++){
    console.log("@"+" ".repeat(num)+"@")
}
console.log("@".repeat(num+2))