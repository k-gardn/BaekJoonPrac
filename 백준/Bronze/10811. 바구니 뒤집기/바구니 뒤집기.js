const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// console.log(arr)
const n = Number(arr[0].split(' ')[0])
const m =  Number(arr[0].split(' ')[1])

let initArr = []
for(let i=1;i<=n;i++ ){
    initArr.push(i)
}

const reverse = (arr,start,end) =>{
    let revArr=[]
 
  for(let i=end-1;i>=start-1;i--){
    revArr.push(arr[i])
  }
     arr.splice(start-1,end-start+1,...revArr)
     return arr
}

  for(let i=1;i<=m;i++){
      const start = arr[i].split(' ').map(Number)[0]
      const end = arr[i].split(' ').map(Number)[1]
      reverse(initArr,start,end)
  }

// reverse(initArr,3,4)
console.log(initArr.join(' '))