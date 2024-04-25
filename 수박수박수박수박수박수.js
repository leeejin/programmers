function solution(n) {
    var answer = '';
    let arr = new Array(n).fill("수").map((v,i)=> answer += i % 2 ==0 ? "수" : "박");
    return answer;
}