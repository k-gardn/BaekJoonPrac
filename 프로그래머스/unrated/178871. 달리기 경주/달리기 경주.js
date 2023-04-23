function solution(players, callings) {
    var answer = [];
    let playerMap = new Map;
    players.forEach((player, idx)=>{
        playerMap.set(player,idx);
    })
     callings.forEach((call)=>{
         let callIdx = playerMap.get(call); //call한 사람의 등수
         let frontCall = players[callIdx - 1]; // call한 사람의 앞사람.
         
         playerMap.set(call, playerMap.get(call) - 1)
         playerMap.set(frontCall, playerMap.get(frontCall) + 1); //앞 사람은 뒤로 밀림.
         [players[callIdx], players[callIdx -1]] = [players[callIdx -1], players[callIdx]]; //구조분해 할당을 사용하여 players 배열을 바꿔줌.
         // playerMap.set()
     })
    
    // console.log(playerMap);
    console.log(players);
    // callings.forEach((call)=>{
    //     // 이름 불린 사람의 등수를 -1
    //     let callIdx = players.indexOf(call);
    //     let tmp = players[callIdx - 1];
    //     players[callIdx - 1] = call; //앞 등수에 이름 불린 사람으로 바꿔.
    //     // 그 앞 사람의 등수를 +1
    //     players[callIdx] = tmp;
    // })
    return players;
}