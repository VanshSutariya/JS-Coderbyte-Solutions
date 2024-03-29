/*Additive Persistence
Have the function AdditivePersistence(num) take the num parameter being passed which 
will always be a positive integer and return its additive persistence which is the number of 
times you must add the digits in num until you reach a single digit. For example: 
if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and 
you stop at 9.
Examples
Input: 4
Output: 0
Input: 19
Output: 2
*/
function AdditivePersistence(num) {
  num = num.toString();
  let count = 0;

  while (count < 10000) {
    if (num.length === 1) {
      break;
    }
    count++;
    let sum = 1;
    for (let i = 0; i < num.length; i++) {
      sum *= parseInt(num[i]);
    }
    num = sum.toString();
  }
  return count;
}
console.log(AdditivePersistence(9999));
