function maxHeapChecker(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let parent = arr[i];
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    if (arr[leftChild] > parent) {
      output.push(arr[leftChild]);
    }
    if (arr[rightChild] > parent) {
      output.push(arr[rightChild]);
    }
  }
  if (output.length === 0) {
    return "max";
  } else {
    return output.join(",");
  }
}

console.log(maxHeapChecker([100, 19, 36, 17])); // Output: "max"
console.log(maxHeapChecker([10, 19, 52, 13, 16])); // Output: "19,52"
