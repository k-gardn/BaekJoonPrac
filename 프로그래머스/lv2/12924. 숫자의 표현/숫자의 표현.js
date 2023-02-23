function solution(n) {
    var answer = 1;
    
    for(let i=1;i<=parseInt(n/2);i++){
        let sum =i
        for(let j=i+1;j<=parseInt(n/2)+1;j++){
            // console.log('i',i,'j',j)
                sum += j
                // console.log('sum',sum)
                if(sum === n){
                    // console.log(i,j)
                    ++answer
                    // console.log('answer',answer)
                }
                if(sum >=n) break
            
        }
    }
    return answer;
}