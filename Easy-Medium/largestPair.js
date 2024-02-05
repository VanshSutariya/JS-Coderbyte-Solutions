/*
LARGEST PAIR 
Examples
Input: 453857
Output: 85
Input: 363223311
Output: 63
*/
function largestPair(num) {
  let numStr = num.toString();
  let max = 0;

  for (let i = 0; i < numStr.length - 1; i++) {
    let pair = parseInt(numStr.slice(i, i + 2));
    max = Math.max(max, pair);
  }

  return max;
}

console.log(largestPair(4759472));
