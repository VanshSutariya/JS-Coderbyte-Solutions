/*
Examples
Input: "2a3b5 w1o2rl3d g1gg92"
Output: true
Input: "21aa3a ggg4g4g6ggg"
Output: false
*/

function threeNumbers(str) {
  const numbers = str
    .split(" ")
    .map((word) => word.split("").filter((char) => !isNaN(char)));

  for (const num of numbers) {
    if (
      num.length < 3 ||
      num[0] == num[1] ||
      num[1] == num[2] ||
      num[0] == num[2]
    ) {
      return false;
    }
  }

  return true;
}

const result = threeNumbers("2a3b5 w1o2rl3d gg1g92");
console.log(result);

/*
function threeNumbers(str) {
  let arr = str.split(" ");
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr[i].length; j++) {
      let elem = arr[i].charAt(j);
      if (!isNaN(elem)) {
        temp.push(elem);
      }
    }
    numbers.push(temp);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length > 2) {
      if (
        numbers[i][0] == numbers[i][1] ||
        numbers[i][1] == numbers[i][2] ||
        numbers[i][0] == numbers[i][2]
      ) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

const result = threeNumbers("2a3b5 w1o2rl3d gg1g92");
console.log(result);*/
