function solution(n) {
    var answer = 0;
    let min = 0;
    let nArr = String(n).split("").map(Number);
    console.log(nArr)
    nArr.sort((a,b)=> b-a)
     console.log(nArr)
    // for(let i = 0; i < nArr.length; i++){
    //     for(let j = i+1; j < nArr.length; j++){
    //         if(nArr[i] >= nArr[j]){
    //             let tmp = nArr[j];
    //             nArr[j] = nArr[i];
    //             nArr[i] = tmp;
    //             break;
    //         }
    //     }
    // }
    // console.log(nArr)
    return parseInt(nArr.join(''));
}