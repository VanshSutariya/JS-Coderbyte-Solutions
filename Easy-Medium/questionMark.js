/*
"arrb6???4xxbl5???eee5"
Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true
*/

let input = "acc?7??sss?3rr1??????5";
let newStr = [];
function questonmark(str) {
  for (const item of str) {
    if (item == "?" || /[0-9]/.test(item)) {
      newStr.push(item);
    }
  }
  let demo = newStr.join("");
  for (let i = 0; i < demo.length; i++) {
    if (
      demo.charAt(i) === "?" &&
      demo.charAt(i + 1) === "?" &&
      demo.charAt(i + 2) === "?"
    ) {
      let sum = Number(demo[i - 1]) + Number(demo[i + 3]);
      if (sum === 10) {
        return true;
      }
    }
  }
  return false;
}
console.log(questonmark(input));
