/*Have the function ApproachingFibonacci(arr) take the arr parameter being passed which will be an array of integers and 
determine the smallest positive integer (including zero) that can be added to the array to make the sum of all of the numbers 
in the array add up to the next closest Fibonacci number. For example: if arr is [15, 1, 3], then your program should output 2 
because if you add up 15 + 1 + 3 + 2 you get 21 which is the closest Fibonacci number. */

function ApproachingFibonacci(arr) {
  let nearFibb = arr.reduce((acc, num) => acc + num, 0);
  let n1 = 0;
  let n2 = 1;
  let curr;
  let addextraNumber;
  for (let i = 0; i < 15; i++) {
    curr = n1 + n2;
    n1 = n2;
    n2 = curr;

    if (curr > nearFibb) {
      return curr - nearFibb;
    }
  }
}
console.log(ApproachingFibonacci([8, 0, 1]));
