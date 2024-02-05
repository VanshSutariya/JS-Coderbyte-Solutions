let input = "(()(";
function removedbrackets(str) {
  str = str.split("");
  let left = 0;
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") left++;
    if (str[i] == ")") right++;
  }
  let min = Math.min(left, right);
  let max = Math.max(left, right);
  return max - min;
}
console.log(removedbrackets(input));
