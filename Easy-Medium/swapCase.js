/*Swap Case
Have the function SwapCase(str) take the str parameter and swap the case of each 
character. For example: if str is "Hello World" the output should be hELLO wORLD. Let 
numbers and symbols stay the way they are.
Examples
Input: "Hello-LOL"
Output: hELLO-lol
Input: "Sup DUDE!!?"
Output: sUP dude!!?
*/

function SwapCase(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase() && arr[i] !== arr[i].toUpperCase()) {
      arr[i] = arr[i].toUpperCase();
    } else if (
      arr[i] === arr[i].toUpperCase() &&
      arr[i] !== arr[i].toLowerCase()
    ) {
      arr[i] = arr[i].toLowerCase();
    }
  }
  console.log(arr.join(""));
}

SwapCase("Sup DUDE!!?");
