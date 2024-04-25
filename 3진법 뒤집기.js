function solution(n) {
    var answer = n.toString(3).split("").map(Number).reverse().join("");
    return parseInt(answer,3);
}