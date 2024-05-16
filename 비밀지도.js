const filter = (n, arr) => {
  const binary_number = arr.toString(2);
  const repeat =
    binary_number.length < n ? "0".repeat(n - binary_number.length) : "";
  return repeat + binary_number;
};
function solution(n, arr1, arr2) {
  var answer = [];
  let array1 = arr1.map((arr) => filter(n, arr));
  let array2 = arr2.map((arr) => filter(n, arr));
  for (let i = 0; i < array1.length; i++) {
    let str = "";
    array1[i].split("");
    array2[i].split("");
    for (let j = 0; j < array2[i].length; j++) {
      if (array1[i][j] == "1" || array2[i][j] == "1") str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}
