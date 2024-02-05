/*
Second GreatLow
Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return 
the second lowest and second greatest numbers, respectively, separated by a space. For 
example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be 
empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
Examples
Input: [1, 42, 42, 180]
Output: 42 42
Input: [4, 90]
Output: 90 4
*/

function SecondGreatLow(arr) {
  const narr = arr.sort((a, b) => a - b);
  console.log(narr[1], narr[narr.length - 2]);
}
SecondGreatLow([1, 70, 90, 25, 67, 42, 42, 180]);
