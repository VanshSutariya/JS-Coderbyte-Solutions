function arraycouple(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    let left = arr[i];
    let right = arr[i + 1];
    if (!pairInarray(arr, [right, left], i)) {
      newArr.push([left, right]);
    }
  }
  return newArr.length === 0 ? "yes" : newArr.join(",");
}
function pairInarray(arr, pair, index) {
  let [left, right] = pair;
  for (let i = 0; i < arr.length; i += 2) {
    if (index !== 1 && arr[i] == left && arr[i + 1] == right) {
      return true;
    }
  }
  return false;
}

console.log(arraycouple([6, 2, 2, 6, 5, 14, 14, 1]));
// console.log(arraycouple([4, 5, 1, 4, 5, 4, 4, 1]));
