/*
Examples
Input: "letters=A B Z T numbers=1 2 26 20 combine=true"
Output: 7=7 7=9 7=4
Input: "a=3 b=4 a=23 b=a 4 23 c="
Output: 1=1 1=1 1=2 1=6 1=0

*/

let input = "letters=A B Z T numbers=1 2 26 20 combine=true";
function CommandLine(str) {
  str = str.split(/\s(?=\w+=)/);
  let nstr = str.map((pair) => {
    let arr = pair.split("=");
    arr = arr.map((word) => {
      return word.length;
    });
    return arr.join("=");
  });
  return nstr.join(" ");
}

// keep this function call here
console.log(CommandLine(input));

/*
let input = "letters=A B Z T numbers=1 2 26 20 combine=true";
function CommandLine(str) {
  let splitter = /\s(?=\w+=)/;
  let wordArr = str.split(splitter);
  console.log(wordArr);
  wordArr = wordArr.map((pair) => {
    let pairArr = pair.split("=");
    pairArr = pairArr.map((word) => {
      return word.length.toString();
    });
    return pairArr.join("=");
  });
  return wordArr.join(" ");
}

// keep this function call here
console.log(CommandLine(input));
*/
