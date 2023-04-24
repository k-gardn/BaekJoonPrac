function solution(name, yearning, photo) {
    var answer = [];
    let frendScore = new Map;
    name.forEach((friend,nameIdx) =>{
        yearning.forEach((score,scoreIdx) =>{
            nameIdx == scoreIdx ? frendScore.set(friend, score) : null;
        })
    })
    console.log(frendScore)
    let result = photo.map(eachPhoto=>{
        let sum = 0;
        eachPhoto.forEach(friend=>{
            if(frendScore.has(friend))
                sum += frendScore.get(friend);
        })
        return sum;
    })
    console.log(result)
    return result;
}