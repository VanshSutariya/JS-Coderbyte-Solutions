/*
Time Convert
Have the function TimeConvert(num) take the num parameter being passed and return the 
number of hours and minutes the parameter converts to (ie. if num = 63 then the output should 
be 1:3). Separate the number of hours and minutes with a colon.
Examples
Input: 126
Output: 2:6
Input: 45
Output: 0:45
*/

function TimeConvert(num) {
  let hour = 0;
  let min = 0;
  min += num % 60;
  hour += (num - min) / 60;
  console.log(`${hour}:${min}`);
}
TimeConvert(45);
