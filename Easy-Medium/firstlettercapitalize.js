Input: "hello world";
// Output: Hello World
// Input: "i ran there"
// Output: I Ran There
// ---------------------------------------
const Capitalize = function (input) {
  const res = input
    .split(" ")
    .map((str) => str.replace(str[0], str[0].toUpperCase()))
    .join(" ");
  console.log(res);
};
Capitalize("i ran theRe");
