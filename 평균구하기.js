function solution(arr) {
    let answer = arr.reduce((prev,cur)=>prev += cur,0);
    return answer / arr.length;
}