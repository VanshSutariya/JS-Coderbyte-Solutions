/*Mean Mode
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if 
the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should 
return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only 
contain positive integers, and will not contain more than one mode.
Examples
Input: [1, 2, 3]
Output: 0
Input: [4, 4, 4, 6, 2]
Output: 1
*/

function MeanMode(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  let mean = Math.round(sum / arr.length);
  console.log(mean);
  // mode
  arr.sort((a, b) => a - b);
  console.log(arr);
  let mostOccurences = 0;
  let mode = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        if (count > mostOccurences) {
          mostOccurences = count;
          mode = arr[j];
        }
      }
    }
  }
  console.log("mode", mode);
  const res = mean === mode ? 1 : 0;
  console.log(res);
}
MeanMode([4, 4, 4, 6, 6, 2]);
