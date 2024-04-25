function solution(a, b) {
    var answer = 0;
    let max = a>=b ? a :b;
    let min = a>=b ? b:a;
    let arr = new Array(max-min+1).fill(min).map((v,i)=>(i)+min).forEach((arr)=>answer+=arr);
    return answer;
}