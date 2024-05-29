function solution(n) {
  let arr = new Array(n + 1).fill(true);
  arr.splice(0, 2, false, false);
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((a) => a === true).length;
}
