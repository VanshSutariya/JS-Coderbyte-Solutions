/*
Number Addition
Have the function NumberSearch(str) take the str parameter, search for all the numbers in 
the string, add them together, then return that final number. For example: if str is "88Hello 
3World!" the output should be 91. You will have to differentiate between single digit numbers 
and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return 
two different answers. Each string will contain at least one letter or symbol.
Examples
Input: "75Number9"
Output: 84
Input: "10 2One Number*1*"
Output: 13
*/
function NumberAddition(str) {
  const arr = str
    .replace(/[^0-9]/g, " ")
    .trim()
    .split(" ");
  console.log(arr);
  let newarr = [];
  for (const item of arr) {
    if (/[0-9]/.test(item)) {
      newarr.push(parseInt(item));
    }
  }
  let sum = newarr.reduce((acc, mov) => acc + mov, 0);
  console.log(sum);
}
NumberAddition("10 2One Number*1*");
