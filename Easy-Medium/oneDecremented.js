/*
One Decremented
Have the function OneDecremented(str) count how many times a digit appears that is 
exactly one less than the previous digit. For example: if str is "5655984" then your program 
should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will 
always contain at least 1 digit.
Examples
Input: "56"
Output: 0
Input: "9876541110"
Output: 6

*/
let input = "5655984";
function Decremented(str) {
  str = str.split("");
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (Number(str[i - 1]) === Number(str[i]) + 1) {
      count++;
    }
  }
  return count;
}

console.log(Decremented(input));
