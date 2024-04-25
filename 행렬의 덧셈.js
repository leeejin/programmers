function solution(arr1, arr2) {
    var answer = [[]];
    let arr = arr1.map((a1,i)=>a1.map((a2,j)=>{
        answer.push(a1[i]+a2[j]);
    }))
    return answer;
}