class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String signA = Integer.toString(a);
        String signB = Integer.toString(b);
        
        String sign = signA + signB;
        int signNum = Integer.parseInt(sign);
            
        if(signNum >= 2 * a * b) {
            answer = signNum;
        }else{
             answer = 2 * a * b;
        }
        
        return answer;
    }
}