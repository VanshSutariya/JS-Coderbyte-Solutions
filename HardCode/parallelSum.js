function ParallelSum(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) return -1;
  let first = [];
  let sec = [];

  arr.sort((a, b) => b - a);

  let fsum = arr[0];
  let ssum = arr[1];

  first.push(fsum);
  sec.push(ssum);

  for (let i = 2; i < arr.length; i++) {
    let FcurrSum = fsum + arr[i];
    let ScurrSum = ssum + arr[i];
    if (FcurrSum > ScurrSum) {
      sec.push(arr[i]);
      ssum += arr[i];
    } else {
      first.push(arr[i]);
      fsum += arr[i];
    }
  }
  if (first.length !== sec.length && fsum !== ssum) return -1;

  first.reverse();
  sec.reverse();
  return first[0] < sec[0]
    ? first.concat(sec).join(",")
    : sec.concat(first).join(",");
}

console.log(ParallelSum([2, 3, 1]));
console.log(ParallelSum([16, 22, 35, 8, 20, 1, 21, 11]));
