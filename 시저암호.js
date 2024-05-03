function solution(s, n) {
    var answer = '';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i =0; i<s.length; i++){
        if(s[i] == " ") {
            answer += " ";
            continue;
        }
        
        let position = upper.includes(s[i]) ? upper : lower;
        let index = position.indexOf(s[i])+n;
        if(index>= position.length){
            index -= position.length;
        }
        answer += position[index];
    }
    return answer;
}