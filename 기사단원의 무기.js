function solution(number, limit, power) {
    let arr = new Array(number).fill(1).map((v,i)=> i+1).map((s,j)=>{
        let temp = [];
        for(let j =1; j<=s; j++){
            if(s % j==0)temp.push(j)
        }
        return temp.length <= limit ? temp.length : power
    });
    let count =0;
    arr.forEach((s)=> count += s);
    return count;
}