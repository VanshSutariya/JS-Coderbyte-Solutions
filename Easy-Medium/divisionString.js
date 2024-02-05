/*
Division Stringified
Have the function DivisionStringified(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas. If an 
answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For
example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
Examples
Input: 5 & num2 = 2
Output: 3
Input: 6874 & num2 = 67
Output: 103
*/

// ["1", "2", "3", "4", "5", "6","7", "8", "9"]  /  ["1","0","0","0"]
function divisionString(num1, num2) {
  let res = Math.round(num1 / num2)
    .toString()
    .split("");
  // ["1", "2", "3", "4", "6"]
  if (res.length > 3) {
    for (let i = res.length - 3; i > 0; i = i - 3) {
      res.splice(i, 0, ",");
    }
  }
  console.log(res.join(""));
}

divisionString(1000000000, 5);

// var res = 123456789;
// var string = res.toString(); // Converts the result to a string: "123456789"
// var numleng = string.length; // Gets the length of the string: 9
// var newstring = string; // Initializes a new string variable with the original string

// if (numleng > 3) {
//   var arr = string.split(""); // Converts the string to an array: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

//   // Loop to insert commas every three digits from the right
//   for (var i = numleng - 3; i > 0; i = i - 3) {
//     arr.splice(i, 0, ","); // Inserts a comma at the current position
//   }

//   newstring = arr.join(""); // Joins the array back into a string: "123,456,789"
// }

// // The final result with commas inserted is "123,456,789"
// console.log(newstring);
