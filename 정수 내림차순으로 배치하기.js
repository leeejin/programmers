function solution(n) {
    var answer = 0;
    let arr = n.toString().split("").map(Number);
    arr.sort((a,b)=>b-a); //내림차순 정렬
    answer = Number(arr.join("")) //배열을 문자열로 합친 후 정수로 변환

    return answer;
}