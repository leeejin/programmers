function solution(s) {
    let count = [0,0]; // 회차, 0제거 개수 
    while(s !=='1'){
        let arr = s.split("").filter((arr)=> arr ==='1').length;
        count[0]++;
        count[1] += s.length - arr;
        s = arr.toString(2);
    }
    return count;
}