function solution(num) {
    var answer = 0;
    let count = 0
    
    function cal(num){
        if(num !== 1){
            if(num % 2 === 0){
                num = num / 2
                ++count 
                console.log(count)
            }else{
                num = num * 3 + 1
                ++count 
            }
        }
        // console.log(count)
        console.log(num)
        return num !==1 ? cal(num) :count
    }
    answer = cal(num)

   if(count>=500){
       answer = -1
   }
    return answer;
}