/*
    Number Stream
Have the function NumberStream(str) take the str parameter being passed which will 
contain the numbers 2 through 9, and determine if there is a consecutive stream of digits of at 
least N length where N is the actual digit value. If so, return the string true, otherwise return the 
string false. For example: if str is "6539923335" then your program should return the 
string true because there is a consecutive stream of 3's of length 3. The input string will always
contain at least one digit.
Examples
Input: "5556293383563665"
Output: false
Input: "5788888888882339999"
*/
function numberString(str) {
  for (let i = 2; i < 10; i++) {
    let iChar = i.toString();
    let needle = iChar.repeat(i);
    if (str.indexOf(needle) != -1) {
      return true;
    }
  }
  return false;
}
console.log(numberString("5788888888882339999"));
