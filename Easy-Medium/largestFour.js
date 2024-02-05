/*
Examples
Input: [1, 1, 1, -5]
Output: -2
Input: [0, 0, 2, 3, 7, 1]
Output: 13
*/
function LargestFour(arr) {
  if (arr.length > 4) {
    arr.sort((a, b) => a - b);
    let i = 0;
    let sum = 0;
    while (i < 4) {
      let elem = arr.pop();
      sum += elem;
      i++;
    }
    return sum;
  } else {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
}

console.log(LargestFour([0, 0, 2, 3, 7, 1]));
