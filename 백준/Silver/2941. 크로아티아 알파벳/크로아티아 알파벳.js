let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const croAlpha = 'c= c- dz= d- lj nj s= z='.split(' ')
croAlpha.filter(el=> input.includes(el)).forEach(el=>{
    while(input.includes(el))
    input = input.replace(el,0)
    })
console.log(input.length)