/*
 Bitwise OR
 Examples
Input: ["100", "000"]
Output: 100
Input: ["00011", "01010"]
Output: 01011

*/

function bitwiseOne(arr) {
  const arr1 = arr[0];
  const arr2 = arr[1];
  let nstr = "";
  for (let i = 0; i < arr1.length; i++) {
    if (parseInt(arr1.charAt(i)) || parseInt(arr2.charAt(i))) {
      nstr = nstr + "1";
    } else {
      nstr += "0";
    }
  }
  return nstr;
}

let input = ["00011", "01010"];
console.log(bitwiseOne(input));
