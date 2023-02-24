function solution(n, k) {
    var answer = 0;
    
    const kNum = n.toString(k)
    // console.log(kNum)
    kNum.split('0').map(Number).forEach((el)=>{
        console.log(el)
         let count = 0 
         if(el !== 1 && el !== 0){
             // console.log(el)
            for(let i=1;i<=parseInt(Math.sqrt(el));i++){
                if(el % i === 0 ){
                    ++count
                }
            } 
             count>1 ? null : ++answer
             console.log('answer',answer)
         }
    })
    // console.log(kNum)
    return answer;
}