function solution(s) {
    var answer = '';
    const strArr = s.split(' ').sort((a,b)=>a-b)
    // .filter((el,idx)=> el[0],el[])
    // console.log(strArr.shift(),strArr.pop())
    answer = [strArr.shift(),strArr.pop()].join(' ')
    // answer += strArr.shift() + strArr.pop()
    return answer;
}