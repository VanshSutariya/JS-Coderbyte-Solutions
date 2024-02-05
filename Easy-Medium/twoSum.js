/* TWO SUM
 */

function TwoSum(arr) {
  const target = arr[0];
  let output = [];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[j] + arr[i];
      if (sum == target) {
        output.push(arr[i], arr[j]);
      }
    }
  }
  console.log(output.join(","));
}

TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]);
