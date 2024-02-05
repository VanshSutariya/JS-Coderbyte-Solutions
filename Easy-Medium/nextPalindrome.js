/*
Examples
Input: 2
Output: 3
Input: 180
Output: 181
*/

function nextPalindrome(num) {
  num = parseInt(num);
  let reverse;
  do {
    num++;
    reverse = parseInt(num.toString().split("").reverse().join(""));
  } while (num !== reverse);

  return reverse;
}

console.log(nextPalindrome(3));
