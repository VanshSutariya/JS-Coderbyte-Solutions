const strArr = ["abcd", "eikr", "oufj"];

const isVowelSqPresent = (strArr) => {
  // first replace all vowels with '$'
  strArr = strArr.map((str) => {
    return str.toLowerCase().replace(/[aeiou]/g, "$");
  });

  // traverse the 2d Array
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      // if we found the square return the row and col
      if (checkIsSquare(strArr, i, j)) {
        return `${i}-${j}`;
      }
    }
  }

  // if not found after traversing all then return
  return "not found";
};

const checkIsSquare = (strArr, row, col) => {
  // now check in 2 X 2 matrix from row and col position
  /*
        row,col     row,col+1
        row+1,col   row+1,col+1
    */

  let rowLen = strArr.length;
  let colLen = strArr[0].length;

  if (row + 1 >= rowLen && col + 1 >= colLen) {
    return false;
  }

  if (
    strArr[row][col] === "$" &&
    strArr[row + 1][col] === "$" &&
    strArr[row][col + 1] === "$" &&
    strArr[row + 1][col + 1] === "$"
  ) {
    return true;
  }

  return false;
};

const output = isVowelSqPresent(strArr);
console.log(output);

// check is square function ma boundry condition mukvi pade nakar array index out of bounds error aape

// /----------------------------------------------------
/*
const input = ["abcd", "eikr", "oufj"];

function vowelSquare(arr) {
  let index = [];

  for (let item of arr) {
    let str = item;
    let currIndex = [];
    let n = item.length;
    str = str.toLowerCase();

    for (let i = 0; i < n; i++) {
      let findvowel = str.charAt(i);
      if (/[aeiou]/.test(findvowel)) {
        currIndex.push(i);
      }
    }

    index.push(currIndex);
  }

  let finalres = [];

  for (let i = 0; i < index.length - 1; i++) {
    for (let j = 0; j < index[i].length; j++) {
      if (index[i].length > 1 && index[i + 1].length > 1) {
        for (let k = 0; k < index[i + 1].length; k++) {
          if (index[i][j] === index[i + 1][k]) {
            finalres.push(i);
            finalres.push(index[i][j]);
            return finalres;
          }
        }
      }
    }
  }

  return finalres;
}

const output = vowelSquare(input);
console.log(output);
*/
