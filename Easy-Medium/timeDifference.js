/*
  Examples
Input: ["1:10pm", "4:40am", "5:00pm"]
Output: 230
Input: ["10:00am", "11:45pm", "5:00am", "12:01am"]
Output: 16
  */
let input = ["1:10pm", "4:40am", "5:00pm"];

const findMinutes = (arr) => {
  let minutes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let time1 = arr[i];
      let time2 = arr[j];
      if (time1.length !== 7) {
        time1 = "0" + time1;
      }
      if (time2.length !== 7) {
        time2 = "0" + time2;
      }
      let hour1 = time1.substring(0, 2);
      let hour2 = time2.substring(0, 2);

      let ampm1 = time1.substring(5, 7);
      let ampm2 = time2.substring(5, 7);

      let min1 = parseInt(time1.substring(3, 5));
      let min2 = parseInt(time2.substring(3, 5));

      if (ampm1 === "pm") {
        hour1 = parseInt(hour1) % 12;
        if (hour1 > 1) {
          hour1 += 12;
        }
      }
      if (ampm2 === "pm") {
        hour2 = parseInt(hour2) % 12;
        if (hour2 > 1) {
          hour2 += 12;
        }
      }
      let totalMinutes = hour2 * 60 + min2 - (hour1 * 60 + min1);

      if (totalMinutes < 0) {
        totalMinutes = totalMinutes + 60 * 24;
      }
      minutes.push(totalMinutes);
    }
  }

  return minutes;
};

let output = findMinutes(input);
console.log(output);
