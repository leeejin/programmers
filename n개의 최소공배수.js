function solution(arr) {
    var answer = 1;
    for(let i =0; i<arr.length; i++){
        answer = (answer*arr[i]) / gcd(answer,arr[i]);
        console.log(answer)
    }
    return answer;
}
const gcd=(a,b)=>{
    if(b===0)return a;
    else if(a%b ===0) return b;
    else return gcd(b,a%b);
}