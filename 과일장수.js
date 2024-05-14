function solution(k, m, score) {
  var answer = 0;
  let arr = [];
  // 1: 최하 ~p~k : 최상
  // m개씩
  // 제일 낮은게 p인 경우 한 상자 가격은 p*m;
  score.sort().reverse();
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    if (arr.length === m) {
      answer += Math.min(...arr) * m; //사과 한상자 사과 개수
      arr = [];
    }
  }
  return answer;
}
