function solution(x, n) {
    var answer = new Array(n).fill(x).map((v,i)=>(i+1)*v);
    return answer;
}