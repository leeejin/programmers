function solution(a, b, n) {
    let answer = 0;
    const recur = (a,b,n)=>{
        if(n<a) return answer;
        return parseInt(n/a)*b + recur(a,b,parseInt(n/a)*b+ n%a);
    }
    return recur(a,b,n);
}