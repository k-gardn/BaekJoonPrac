const [input,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m]=input.split(' ').map(Number)
const conditionArr = arr.map(el=>el.split(' ').map(Number))
const initArr = Array.from(Array(n),(_,idx)=>  idx+1)

function arrange(arr,start,end,mid){
    const piece = arr.slice(start-1,end)
    const midIdx = piece.indexOf(arr[mid-1])
    const arrangedPiece = piece.map((el,idx,arr)=> {
        if(idx <= end-mid){
            el = piece[idx + midIdx]
        }else{
            el  = piece[idx - end + mid - 1]
        }
        return el
        }
       )
       arr.splice(start-1,end-start+1,...arrangedPiece)
}

conditionArr.forEach(el=>{
    arrange(initArr,el[0],el[1],el[2])
})
console.log(initArr.join(' '))