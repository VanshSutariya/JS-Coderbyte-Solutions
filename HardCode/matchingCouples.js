function matchCouples(arr) {
  const [boys, girls, pairs] = arr;
  const eachGendermember = pairs / 2;
  const boyscombination = combination(boys, eachGendermember);
  const girlscombination = combination(girls, eachGendermember);
  const totalWays =
    boyscombination * girlscombination * factorial(eachGendermember);
  return totalWays;
}
function factorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}
function combination(n, r) {
  return factorial(n) / (factorial(n - r) * factorial(r));
}
console.log(matchCouples([10, 5, 4]));
