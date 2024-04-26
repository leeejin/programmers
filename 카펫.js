function solution(brown, yellow) {
    let sum = brown+yellow;
    for(let h = 3; h<=brown; h++){
        let w = sum / h; // w,h>=3 
        if((w-2)*(h-2) == yellow) return [w,h]; 
    }
}