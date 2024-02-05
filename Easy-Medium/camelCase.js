/*
Examples
Input: "cats AND*Dogs-are Awesome"
Output: catsAndDogsAreAwesome
Input: "a b c d-e-f%g"
Output: aBCDEFG
*/

let input = "a b c d-e-f%g";

function camelCase(str) {
  str = str.toLowerCase();
  let arr = str.split(/[^a-z]/);
  let fWord = arr[0];
  arr.shift();
  arr = arr.map((element) =>
    element.replace(element.charAt(0), element.charAt(0).toUpperCase())
  );
  arr.unshift(fWord);
  console.log(arr.join(""));
}

camelCase(input);
