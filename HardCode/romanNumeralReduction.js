// let input = "XXXVVIIIIIIIIII";
let input = "DDLL";

function romanNumeralReduction(str) {
  const ROMAN_NUMERALS = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  str.split("").forEach((elem) => {
    sum += ROMAN_NUMERALS[elem];
  });

  let output = "";
  Object.entries(ROMAN_NUMERALS).forEach((value) => {
    let num = Math.floor(sum / value[1]);
    console.log(num);
    sum -= num * value[1];
    output += value[0].repeat(num);
  });
  return output;
}
const output = romanNumeralReduction(input);
console.log(output);
