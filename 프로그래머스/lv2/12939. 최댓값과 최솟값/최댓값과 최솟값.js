function solution(s) {
    var answer = '';
    const strArr = s.split(' ').sort((a,b)=>a-b)
    answer = [strArr.shift(),strArr.pop()].join(' ')
    //const strArr = s.split(' ').sort((a,b)=>a-b).filter((el,idx,arr)=> idx === 0 || idx === arr.length-1)
    //answer = strArr.join(' ')
    return answer;
}
