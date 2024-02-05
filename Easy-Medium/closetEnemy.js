/*
Examples
Input: [1, 0, 0, 0, 2, 2, 2]
Output: 4
Input: [2, 0, 0, 0, 2, 2, 1, 0]
Output: 1
*/
let Input = [0, 0, 1, 0, 0, 2, 0, 2];

function closetEnemy(arr) {
  if (!arr.includes(2)) {
    return 0;
  }
  let loc1 = arr.indexOf(1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[loc1 + i] == 2 || arr[loc1 - i] == 2) {
      return i;
    }
  }
}

let op = closetEnemy(Input);
console.log(op);
