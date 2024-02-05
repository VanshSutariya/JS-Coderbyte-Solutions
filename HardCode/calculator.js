// function calculator(str) {
//   return eval(
//     str.replace(/ ()()|(d() | ()d)/g, function (m) {
//       return m.split("").join("*");
//     })
//   );
// }
function calculator(str) {
  var arithmeticOperators = ["+", "-", "/", "*"];
  var replacedStr = str.replace(/(.)\(/g, function (match, g1) {
    if (arithmeticOperators.indexOf(g1) != -1) return match;
    else return match.replace(g1, g1 + "*");
  });
  return eval(replacedStr);
}
console.log(calculator("6/3-1"));
console.log(calculator("6*(4/2)+3*1"));
console.log(calculator("7-4-1+8(3)/2"));
