/*
Arith Geo
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the 
string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it 
follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An 
arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or 
common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative 
numbers may be entered as parameters, 0 will not be entered, and no array will contain all the 
same elements.
Examples
Input: [5,10,15]
Output: Arithmetic
Input: [2,4,16,24]
Output: -1

*/

function ArithGeo(arr) {
  let diff = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];
  let arith = true;
  let geo = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      arith = false;
    } else if (arr[i] / arr[i - 1] !== ratio) {
      geo = false;
    }
  }
  if (arith) {
    return "arithmetic";
  } else if (geo) {
    return "geometric";
  } else {
    return -1;
  }
}

console.log(ArithGeo([5, 10, 15]));
// console.log(ArithGeo([2, 6, 18, 54]));
