function solution(people, limit) {
  people.sort((a, b) => a - b);
  let [left, right, answer] = [0, people.length - 1, 0];
  while (left <= right) {
    if (people[left] + people[right] <= limit) left++;
    right--;
    answer++;
  }
  return answer;
}
