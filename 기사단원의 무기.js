function solution(number, limit, power) {
    let arr = new Array(number).fill(1).map((v,i)=> i+1).map((s,j)=>{
        let temp =0;
        for(let j =1; j<=Math.sqrt(s); j++){
            if(s % j==0) temp += s / j == j ? 1 : 2
        }
        return temp <= limit ? temp : power
    }).reduce((prev,cur)=> prev += cur,0);
    return arr;
}