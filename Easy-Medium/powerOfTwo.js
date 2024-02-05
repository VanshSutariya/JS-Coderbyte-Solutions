/*
Powers of Two
Have the function PowersofTwo(num) take the num parameter being passed which will be an 
integer and return the string true if it's a power of two. If it's not return the string false. For 
example if the input is 16 then your program should return the string true but if the input is 22 
then the output should be the string false.
Examples
Input: 4
Output: true
Input: 124
Output: false
*/

function PowersofTwo(num) {
  if (num === 1) return true;
  else {
    return num % 2 === 0 ? PowersofTwo(num / 2) : false;
  }
}
console.log(PowersofTwo(32));

// function PowersofTwo(num) {
//     let nom = num;
//     for (let i = 0; i < nom; i++) {
//       if (num % 2 == 0) {
//         num = num / 2;
//         //   console.log(num);
//         if (num == 2) {
//           console.log("true");
//           break;
//         }
//       } else {
//         console.log("false");
//         break;
//       }
//     }
//   }
//   PowersofTwo(124);
