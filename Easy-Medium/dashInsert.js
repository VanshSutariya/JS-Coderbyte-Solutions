/*
Dash Insert
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers 
in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an 
odd number.
Examples
Input: 99946
Output: 9-9-946
Input: 56730
Output: 567-30
*/
function dashInsert(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    let firstEl = parseInt(arr[i]);
    let secondEl = parseInt(arr[i + 1]);
    if (firstEl % 2 == 1 && secondEl % 2 == 1) {
      arr.splice(i + 1, 0, "-");
    }
  }
  console.log(arr.join(""));
}
dashInsert("11111");
