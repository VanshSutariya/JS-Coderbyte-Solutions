/*
Counting Minutes I
Have the function CountingMinutesI(str) take the str parameter being passed which will 
be two times (each properly formatted with a colon and am or pm) separated by a hyphen and 
return the total number of minutes between the two times. The time will be in a 12 hour clock 
format. For example: if str is 9:00am-10:00am then the output should be 60. 
If str is 1:00pm-11:00am the output should be 1320.
Examples
Input: "12:30pm-12:00am"
Output: 690
Input: "1:23am-1:08am"
Output: 1425
*/
function CountingMinutes(str) {
  let seps = str.split("-");
  console.log(seps);
  let col1 = seps[0].indexOf(":");
  //   console.log(col1);
  let col2 = seps[1].indexOf(":");
  let hour1 = parseInt(seps[0].slice(0, col1));
  let hour2 = parseInt(seps[1].slice(0, col2));
  let min1 = parseInt(seps[0].slice(col1 + 1, col1 + 3));
  let min2 = parseInt(seps[1].slice(col2 + 1, col2 + 3));
  let ampm1 = seps[0].slice(-2);
  let ampm2 = seps[1].slice(-2);

  if (ampm1 == "pm" && hour1 != 12) {
    hour1 = hour1 + 12;
  }
  if (ampm2 == "pm" && hour2 != 12) {
    hour2 = hour2 + 12;
  }
  if (ampm1 == "am" && hour1 == 12) {
    hour1 = 0;
  }
  if (ampm2 == "am" && hour2 == 12) {
    hour2 = 0;
  }
  let time1 = hour1 * 60 + min1;
  var time2 = hour2 * 60 + min2;
  var diff = time2 - time1;

  if (diff < 0) {
    diff = diff + 60 * 24;
  }
  console.log(diff);
}
CountingMinutes("1:00pm-11:00am");
