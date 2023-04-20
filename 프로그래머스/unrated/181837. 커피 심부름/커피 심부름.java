class Solution {
    public int solution(String[] order) {
        //메뉴만 : 차가운 것 / 아무거나: 차가운 것.
        int answer = 0;
        for (String el : order) {
            if(el.contains("americano")){
                answer += 4500;
            }
            else if(el.contains("cafelatte")){
                answer += 5000;
            }
            else{
                answer += 4500;
            }
        }
        return answer;
    }
}