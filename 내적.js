function solution(a, b) {
    var answer = 0;
    a.forEach((a,i) => answer += a[i] * b[i])
    return answer;
}