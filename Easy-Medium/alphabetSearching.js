/*
Examples
Input: "abcdefghijklmnopqrstuvwxyyyy"
Output: false
Input: "abc123456kmo"
Output: false

"zacxyjbbkfgtbhdaielqrm45pnsowtuv"
*/

function alphabetSearch(str) {
  str = str.toLowerCase();
  for (let i = 97; i < 97 + 26; i++) {
    let test = String.fromCharCode(i);
    if (!str.includes(test)) return false;
  }
  return true;
}
const result = alphabetSearch("zacxyjbbkfgtbhdaielqrm45pnsowtuv");
console.log(result);
