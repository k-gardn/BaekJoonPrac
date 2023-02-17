const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let newArr = arr.map(el => el.split(" ").map(Number))

newArr.sort((first, second) => {
    if(first[0] !== second[0]){
        return first[0] - second[0]
    }
    else{
        return first[1] - second[1]
    }
})

// console.log(newArr)
let joinArr = newArr.map((el)=> el.join(" "))
// console.log(joinArr)
console.log(joinArr.join('\n'))
