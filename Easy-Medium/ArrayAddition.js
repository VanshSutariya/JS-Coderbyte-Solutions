/*
Array Addition I
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return 
the string true if any combination of numbers in the array (excluding the largest number) can be
added up to equal the largest number in the array, otherwise return the string false. For 
example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 
= 23. The array will not be empty, will not contain all the same elements, and may contain 
negative numbers.
Examples
Input: [5,7,16,1,2]
Output: false
Input: [3,5,-1,8,12]
Output: true
*/

function ArrayAdditionI(arr) {
  let target = arr.sort((a, b) => a - b).pop();
  console.log(arr);
  return isContains(arr, target);

  function isContains(arr, target) {
    if (arr.length === 0) {
      9;
      return target === 0;
    }
    let head = arr[0];
    let tail = arr.slice(1);
    return isContains(tail, target - head) || isContains(tail, target);
  }
}
// console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
console.log(ArrayAdditionI([5, 7, 16, 1, 2]));
