/*
Letter Count I
Have the function LetterCountI(str) take the str parameter being passed and return the 
first word with the greatest number of repeated letters. For example: "Today, is the greatest day
ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which 
also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by 
spaces.
Examples
Input: "Hello apple pie"
Output: Hello
Input: "No words"
Output: -1

*/
function LetterCount(str) {
  const arr = str.split(" ");
  let n = arr.length;
  let counter = 1;
  let maxcount = 0;
  let newArr = [];
  for (let i = 0; i < n; i++) {
    wordarr = arr[i].split("");
    wordarr.sort();

    for (let j = 0; j < wordarr.length; j++) {
      if (wordarr[j] == wordarr[j + 1]) {
        counter++;
      } else {
        counter > maxcount ? (maxcount = counter) : (counter = 1);
      }
    }
    newArr.push([arr[i], maxcount]);
    maxcount = 0;
  }
  newArr.sort((a, b) => b[1] - a[1]);
  if (newArr[0][1] > 1) {
    return newArr[0][0];
  } else {
    return -1;
  }
}

console.log(LetterCount("Today, is the greatest dayever!"));
