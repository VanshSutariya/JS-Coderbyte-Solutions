/*
Palindrome Swapper
Have the function PalindromeSwapper(str) take the str parameter being passed and 
determine if a palindrome can be created by swapping two adjacent characters in the string. If 
it is possible to create a palindrome, then your program should return the palindrome, if not 
then return the string -1. The input string will only contain alphabetic characters. For example: 
if str is "rcaecar" then you can create a palindrome by swapping the second and third 
characters, so your program should return the string racecar which is the final palindromic 
string.
Examples
Input: "anna"
Output: anna
Input: "kyaak"
Output: kayak
*/
let input = "kyaak";
function PalindromeSwapper(str) {
  let len = str.length;
  let narr = str.split("");

  let checkpalindrome = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[len - (i + 1)]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < narr.length; i++) {
    let demoarr = [...narr];
    demoarr.splice(i, 2, demoarr[i + 1], demoarr[i]);
    if (checkpalindrome(demoarr)) {
      return demoarr.join("");
    }
  }
  return -1;
}
console.log(PalindromeSwapper(input));
