function solution(n, m) {
    let [x,y] = [1,1];
     let arr = new Array(m-n+1).fill(1).map((v,i)=>i+1);
     console.log(arr)
    for(let i =1; i<=m; i++){
        if(m % i ==0 && n % i ==0){
            x = i;
            y = x * n/x * m/x;
        }
    }
     return [x,y];
 }