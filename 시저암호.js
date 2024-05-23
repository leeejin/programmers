function solution(s, n) {
  var answer = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    const alphabet = upper.includes(s[i]) ? upper : lower;
    const idx = alphabet.indexOf(s[i]) + n;
    const newIdx = idx > alphabet.length - 1 ? idx - alphabet.length : idx;
    answer += alphabet[newIdx];
  }
  return answer;
}
