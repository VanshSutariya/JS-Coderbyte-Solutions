function checkpalindrome(check) {
  let newstr = check.split("").reverse().join("");
  return newstr == check ? true : false;
}
function removeChar(removestr) {
  let arr = removestr.split("");
  let index = [];
  for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
    if (arr[i] == arr[j]) {
      j--;
    } else if (arr[i] !== arr[j]) {
      index.push(i);
    }
    if (i >= j) {
      break;
    }
  }
  let result = "";
  for (let i = 0; i < index.length; i++) {
    result += removestr.charAt(index[i]);
  }
  return result;
}

function palindromeCreator(str) {
  if (str.length < 3 || str.length - 2 < 3) {
    return "not possible";
  } else {
    return checkpalindrome(str) ? "palindrome" : removeChar(str);
  }
}

const res = palindromeCreator("abjabcdchba");
console.log(res);
