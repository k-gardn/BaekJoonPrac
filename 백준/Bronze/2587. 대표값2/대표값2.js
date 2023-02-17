const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
arr.sort((a,b)=>a-b)
function calculate(arr){
    const leng = arr.length
    const avg = Math.floor(arr.reduce((acc,el)=> acc+el,0)/leng)
    const median = Math.floor(arr[parseInt(leng/2)])
   
    return console.log(`${avg}\n${median}`)
}

calculate(arr)