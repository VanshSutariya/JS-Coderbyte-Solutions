function FirstFactorial(num) {
  //   let fact = 1;
  //   for (let i = num; i > 0; i--) {
  //     fact *= i;
  //   }
  //   console.log(fact);

  if (num < 0) return NaN;
  return num > 1 ? FirstFactorial(num - 1) * num : 1;
}
console.log(FirstFactorial(4));
