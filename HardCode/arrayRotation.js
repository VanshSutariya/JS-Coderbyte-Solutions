function arrayRotation(arr) {
  // let rotation = arr[0];
  // if (rotation > arr.length * 2) {
  //   rotation = rotation - arr.length * 2;
  // } else if (rotation > arr.length) {
  //   rotation = rotation - arr.length;
  // }
  const rotation = arr[0] % arr.length;
  let newArr = arr.slice(rotation);
  for (let i = 0; i < rotation; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(arrayRotation([4, 3, 4, 1, 6, 10]));
