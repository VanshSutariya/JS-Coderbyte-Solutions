/*
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10

*/
let input = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
function findIntersection(Strarr) {
  let first = Strarr[0].split(", ").map(Number); // Split the string by ", " and convert to numbers
  let second = Strarr[1].split(", ").map(Number);
  let arr = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      arr.push(first[i]);
    }
  }

  console.log(arr.join(","));
}
findIntersection(input);
