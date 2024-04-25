function solution(absolutes, signs) {
    var answer = 0;
    let arr = absolutes.map((ab,i)=> signs[i] === true ? ab : ab * -1).forEach((arr)=> answer += arr);
    return answer;
}