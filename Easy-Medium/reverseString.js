function FirstReverse(str) {
  console.log(str.split(""));
  // Use the split, reverse, and join methods to reverse the string
  return str.split("").reverse().join("");
}

// Example usage:
var inputString = "Hello World and Coders";
console.log(FirstReverse(inputString));
