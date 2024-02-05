/*
String Periods
Have the function StringPeriods(str) take the str parameter being passed and determine
if there is some substring K that can be repeated N > 1 times to produce the input string exactly
as it appears. Your program should return the longest substring K, and if there is none it should 
return the string -1.
For example: if str is "abcababcababcab" then your program should return abcab because that
is the longest substring that is repeated 3 times to create the final string. Another example: 
if str is "abababababab" then your program should return ababab because it is the longest 
substring. If the input string contains only a single character, your program should return the 
string -1.
Examples
Input: "abcxabc"
Output: -1
Input: "affedaaffed"
Output: -1
*/

let input = "affedaaffed";

function stringrepeat(str) {
  let pivot = str.length;
  for (let i = 2; i < pivot; i++) {
    if (str.length % i === 0) {
      let block = str.slice(0, str.length / i);
      if (block.repeat(i) === str) {
        return block;
      }
    }
  }
  return -1;
}
console.log(stringrepeat(input));
