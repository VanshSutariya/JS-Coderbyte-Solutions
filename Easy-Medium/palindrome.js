/*
Palindrome
Have the function Palindrome(str) take the str parameter being passed and return the 
string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string.
Examples
Input: "never odd or even"
Output: true
Input: "eye"
Output: true

*/

function Palindrome(str) {
  const old = str.replace(/\s/g, "");
  const newstr = str.replace(/\s/g, "").split("").reverse().join("");
  if (old === newstr) {
    console.log("true");
  }
}
Palindrome("never odd or even");
