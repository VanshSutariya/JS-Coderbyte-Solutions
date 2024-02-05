/*
BINARY REVERSAL 
Examples
Input: "213"
Output: 171
Input: "4567"
Output: 60296
*/

function binaryReversal(str) {
  let number = parseInt(str);

  let eightBitPadding = Math.ceil(number.toString(2).length / 8);

  // Convert the decimal number to 8-bit binary representation
  let binaryRepresentation = number
    .toString(2)
    .padStart(eightBitPadding * 8, "0");

  const binaryarr = binaryRepresentation.split("");
  const reverseArr = binaryarr.reverse().join("");

  // Convert the 8-bit binary representation to decimal
  let decimalNumber = parseInt(reverseArr, 2);

  return decimalNumber;
}

let input = "4567";
console.log(binaryReversal(input));
