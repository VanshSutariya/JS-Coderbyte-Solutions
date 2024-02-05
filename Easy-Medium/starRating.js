/*
Examples
Input: "0.38"
Output: half empty empty empty empty
Input: "4.5"
Output: full full full full half
*/

let input = "0.7";

function starRating(str) {
  let num = Number(str);
  let string = "";
  for (let i = 0; i < 5; i++) {
    if (num > 0.5) {
      string += "full ";
      num--;
    } else if (num > 0) {
      string += "half ";
      num--;
    } else {
      string += "empty ";
    }
  }
  return string.trim(); // Remove trailing space
}

console.log(starRating(input)); // Output: full full full full half
