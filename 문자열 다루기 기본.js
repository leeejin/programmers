function solution(s) {
    var answer = true;
    let arr = s.split("").map(Number).join("");
    if(s.length===4 || s.length===6)
        answer = isNaN(arr) ? false : true;
    else answer = false;
    return answer;
}