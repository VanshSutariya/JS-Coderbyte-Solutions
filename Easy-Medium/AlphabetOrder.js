/*
Alphabet Soup
Have the function AlphabetSoup(str) take the str string parameter being passed and 
return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume 
numbers and punctuation symbols will not be included in the string.
Examples
Input: "coderbyte"
Output: "bcdeeorty"
*/

function AlphabetSoup(str) {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort()
    .join("");
}
console.log(AlphabetSoup("code#$%!@#&*rby03964te"));
