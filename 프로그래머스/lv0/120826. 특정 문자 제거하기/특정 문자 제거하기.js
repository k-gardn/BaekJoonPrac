function solution(my_string, letter) {
    var answer = '';
    const arrStr = my_string.split('').map((el)=>
        el === letter ? null: answer += el
    )
    return answer;
}