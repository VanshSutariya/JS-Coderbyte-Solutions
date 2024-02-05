/*
Simple Symbols
Have the function SimpleSymbols(str) take the str parameter being passed and determine
if it is an acceptable sequence by either returning the string true or false. The str parameter 
will be composed of + and = symbols with several characters between them (ie. ++d+===+c+
+==a) and for the string to be true each letter must be surrounded by a + symbol. So the string 
to the left would be false. The string will not be empty and will have at least one letter.
Examples
Input: "+d+=3=+s+"
Output: true
Input: "f++d+"
Output: false
*/

function SimpleSymbols(str) {
  // if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
  //   return false;
  // } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
  //   return false;
  // } else {
  //   return true;
  // }

  let arr = str.split("");
  let ans = false;
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
    return false;
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (/^[a-zA-z]/.test(arr[i])) {
      if (arr[i - 1] === "+" && arr[i + 1] === "+") {
        ans = true;
      }
    }
  }
  return ans;
}
console.log(SimpleSymbols("f++d+"));
// console.log(SimpleSymbols("+d+=3=+s+"));
