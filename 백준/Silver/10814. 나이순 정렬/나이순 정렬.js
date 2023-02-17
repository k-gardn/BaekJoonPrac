const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// console.log(arr)
const people = arr.map((el)=> el.split(" ")).map(el=> {return [Number(el[0]),el[1]]})
people.sort((a,b)=> a[0]-b[0])
people.map(el=> {console.log(el.join(' '))})
