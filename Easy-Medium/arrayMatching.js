/*
Array MATCHING 
Examples
Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
Output: 7-4-6-10-6
Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
Output: 3-3-6-2
*/

function arrayMatch(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  const newarr1 = JSON.parse(arr1);
  const newarr2 = JSON.parse(arr2);
  console.log(newarr1, newarr2);
  const length =
    newarr1.length < newarr2.length ? newarr2.length : newarr1.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    let first = newarr1[i] ? newarr1[i] : null;
    let second = newarr2[i] ? newarr2[i] : null;
    result.push(first + second);
  }
  return result.join("-");
}

let input = ["[5, 2, 3]", "[2, 2, 3, 10, 6]"];
console.log(arrayMatch(input));
