function solution(n) {
    var answer = 0;
    let x = 0;
    while(true){
        x++;
        if(n % x === 1)
            break;
    }
    return x;
}