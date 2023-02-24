function solution(n, works) {
  var answer = 0;
    const initSum = works.reduce((acc,el)=> acc + el,0)
    // console.log(initSum)
    if(n>initSum){
        return 0
    }
    
//     while(n>0){
//         let maxNum = Math.max(...works)
//         let maxIdx = works.indexOf(maxNum)
//         --n
//         works.splice(maxIdx,1,works[maxIdx]-1)   
//     }
   
   
  works.sort((a, b) => b - a); //맨앞이 젤 큰 수 
    
    // while(n>0){
    //     --works[0] 
    //     --n
    //     if(works[0]<works[1]){
    //          works.sort((a, b) => b - a)  
    //     }
    // }
    let nowIndex = 0
    while(n>0){
        works[nowIndex]--
        n--
        for(let i=0;i<works.length;i++){
            if(works[nowIndex] < works[i]){
                nowIndex = i
                break
            }
          
        }
    }
console.log(works)
    works.forEach(el=> answer += el**2)
    console.log(works)
  return answer;
}