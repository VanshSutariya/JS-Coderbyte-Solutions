// Input: "hello*3";
// Output: Ifmmp * 3;

// function LetterChanges(str) {
//   const arr = Array.from(str.toLowerCase());
//   const increase = function (element) {
//     return String.fromCharCode(element.charCodeAt(0) + 1);
//   };

//   const arr1 = arr.map((ele) => (/^[a-zA-Z]$/.test(ele) ? increase(ele) : ele));
//   for (let i = 0; i < arr1.length; i++) {
//     const el = arr1[i];
//     if (el.match(/[aeiou]/)) {
//       arr1[i] = el.toUpperCase();
//     }
//   }
//   console.log(arr1.join(""));
// }

// LetterChanges("hello*3");

///////
// function LetterChanges(str) {
//   const vowel = ["a", "e", "i", "o", "u"];
//   const arr = Array.from(str.toLowerCase());
//   const increase = function (element) {
//     let lowercaseLetter = element;
//     let asciiCode = lowercaseLetter.charCodeAt(0) + 1; // ASCII code for 'a'
//     return String.fromCharCode(asciiCode);
//   };
//   const arr1 = [];
//   for (const ele of arr) {
//     let char = /^[a-zA-Z]$/.test(ele);
//     const res = char ? increase(ele) : ele;
//     arr1.push(res);
//     console.log(res);
//   }

//   for (const [i, el] of arr1.entries()) {
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
//       arr1[i] = el.toUpperCase();
//     }
//   }
//   console.log(arr1.join(""));
// }

function LetterChanges(str) {
  return str
    .split("")
    .map((c) =>
      String.fromCharCode(
        c >= "a" && c <= "z"
          ? ((c.charCodeAt(0) - 97 + 1) % 26) + 97
          : c >= "A" && c <= "Z"
          ? ((c.charCodeAt(0) + 1 - 65) % 26) + 65
          : c.charCodeAt(0)
      )
    )
    .join("")
    .replace(/[aeiou]/, (letters) => letters.toUpperCase());
}

console.log(LetterChanges("hello*3"));
