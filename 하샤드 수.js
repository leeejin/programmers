function solution(x) {
    let arr = x.toString().split("").map(Number).reduce((prev,cur)=> prev += cur);
     return x % arr=== 0 ? true : false;
}