function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b).reduce((prev,i)=>{
        if(budget>=prev){
            budget -= prev;
            answer++;
        }
    })
    return answer;
}