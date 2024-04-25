function solution(n)
{
    var answer = 0;
    let word = n.toString().split("").map(Number);
    for(let i =0; i<word.length; i++){
        answer += word[i];
    }
    return answer;
}