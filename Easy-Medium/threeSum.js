function threeSum(arr) {
  let j, k;
  let sum = 0;
  let target = arr.shift();
  let n = arr.length;
  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    k = i + 1;
    j = n - 1;
    while (k < j) {
      sum = sortedArr[i] + sortedArr[j] + sortedArr[k];
      if (sum < target) {
        k++;
      } else if (sum > target) {
        j--;
      } else if (sum == target) {
        // If you want to return the triplet, you can modify this part
        return true;
      }
    }
  }
  return false;
}

console.log(threeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]));
