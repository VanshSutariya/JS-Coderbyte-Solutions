function pascall(arr) {
  const n = arr[1];
  const r = arr.length;

  const res = calcFactorial(n) / (calcFactorial(n - r) * calcFactorial(r));
  console.log(res);
}

function calcFactorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}
pascall([1, 17, 136, 680, 2380]);
pascall([1, 6, 15]);
