function solution(n) {
    var answer = 1;
    
    for(let i=1;i<=parseInt(n/2);i++){
        let sum =i
        let plusNum = i+1
        while(sum <= n){
            sum += plusNum
            ++plusNum
            if(sum === n){
                    ++answer
                }
            // console.log(plusNum)
        }
        // for(let j=i+1;j<=parseInt(n/2)+1;j++){
        //         sum += j
        //         if(sum === n){
        //             ++answer
        //         }
        //         if(sum >n) break
        // }
    }
    return answer;
}