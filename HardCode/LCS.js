/*
have the function LCS(strArr) take the strArr parameter being passed which will be an array of two strings containing only the characters {a,b,c} and have your program return the length of the longest common subsequence common to both strings. A common subsequence for two strings does not require each character to occupy consecutive positions within the original strings. For example: if strArr is ["abcabb","bacb"] then your program should return 3 because one longest common subsequence for these two strings is "bab" and there are also other 3-length subsequences such as "acb" and "bcb" but 3 is the longest common subsequence for these two strings.
*/

let str1 = "abcab";
let str2 = "bacb";

function lcs(str1, str2, length1, length2) {
  if (length1 == 0 || length2 == 0) {
    return "";
  }
  if (str1.charAt(length1 - 1) === str2.charAt(length2 - 1)) {
    return lcs(str1, str2, length1 - 1, length2 - 1) + str1.charAt(length1 - 1);
  } else {
    let ans1 = lcs(str1, str2, length1 - 1, length2);
    let ans2 = lcs(str1, str2, length1, length2 - 1);
    return ans1.length > ans2.length ? ans1 : ans2;
  }
}
console.log(lcs(str1, str2, str1.length, str2.length));
