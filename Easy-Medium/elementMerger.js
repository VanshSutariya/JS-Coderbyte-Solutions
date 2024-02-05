let input = [5, 7, 16, 1, 2];
function elementMerger(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    newArr = [];
    arr.forEach((val, index) => {
      if (index < arr.length - 1) {
        newArr.push(Math.abs(val - arr[index + 1]));
      }
    });
    return elementMerger(newArr);
  }
}
console.log(elementMerger(input));
