function solution(s) {
    let arr = s.split(" ").map((s)=> s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).join(" ");
    return arr;
}