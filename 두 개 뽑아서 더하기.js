function solution(numbers) {
    var answer = [];
    for(let i =0; i<numbers.length; i++){
        for(let j =1; j<numbers.length; j++){
            let sum = numbers[i]+numbers[j];
            if(!answer.includes(sum) && i!=j) answer.push(sum);
        }
    }
    return answer.sort((a,b)=>a-b);
}