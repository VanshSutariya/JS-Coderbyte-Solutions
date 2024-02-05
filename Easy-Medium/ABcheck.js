/*
AB Check
Have the function ABCheck(str) take the str parameter being passed and return the string 
true if the characters a and b are separated by exactly 3 places anywhere in the string at least 
once (ie. "lane borrowed" would result in true because there is exactly three characters 
between a and b). Otherwise return the string false.
Examples
Input: "after badly"
Output: false
Input: "Laura sobs"
Output: true
*/

function ABCheck(str) {
  if (str.length < 4) {
    console.log("false");
  } else {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "a") {
        res = str.charAt(i + 4) == "b" ? "true" : "false";
        //   console.log(res);
      }
    }
    console.log(res);
  }
}
ABCheck("Laura sobs");
ABCheck("lane borrowed");
ABCheck("anb");
