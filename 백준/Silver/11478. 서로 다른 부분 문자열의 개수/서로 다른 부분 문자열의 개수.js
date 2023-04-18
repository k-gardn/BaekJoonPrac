const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// console.log(input);
let map = new Map;

for(let i = 0; i<= input.length; i++){
    for(let j = i+1; j<= input.length; j++){
        map.set(input.substring(i, j))
    }
    
}

console.log(map.size)