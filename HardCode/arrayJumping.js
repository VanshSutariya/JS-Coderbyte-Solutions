/*
Have the function ArrayJumping(arr) take the array of numbers stored in arr
and first determine the largest element in the array,
and then determine whether or not you can reach that same element within
the array by moving left or right continuously according to whatever integer
is in the current spot. If you can reach the same spot within the array,
then your program should output the least amount of jumps it took.

For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where
6 is and if you jump 6 spaces to the right while looping around the array you
end up at the last element where the 1 is. Then from here you jump 1 space to
the left and you're back where you started, so your program should output 2.
If it's impossible to end up back at the largest element in the array your
program should output -1. The largest element in the array will never equal
the number of elements in the array. The largest element will be unique. 

Input:1,2,3,4,2
Output:3

Input:1,7,1,1,1,1
Output:2

#Assume max is unique
#Max doesn't equal len(arr) >- output > 1
#Positive integers only   

*/

function ArrayJumping(arr) {
  const ht = {};
  const maxIndex = arr.indexOf(Math.max(...arr));
  const L = arr.length;

  for (let i = 0; i < L; i++) {
    ht[i] = [left(L, i, arr[i]), right(L, i, arr[i])];
  }
  // console.log(ht);
  if (ht[maxIndex].includes(maxIndex)) {
    return 1;
  }

  const travelSet = new Set(ht[maxIndex]);
  console.log(travelSet);

  for (let step = 2; step <= L; step++) {
    const travelArray = [...travelSet];
    for (const val of travelArray) {
      travelSet.add(ht[val][0]);
      travelSet.add(ht[val][1]);
    }
    if (travelSet.has(maxIndex)) {
      return step;
    }
  }
  return -1;
}

function left(length, index, number) {
  let left = number % length;
  if (left > index) {
    left = length + index - left;
  } else {
    left = index - left;
  }
  return left;
}

function right(length, index, number) {
  let right = number % length;
  if (right > length - index - 1) {
    right = right + index - length;
  } else {
    right = right + index;
  }
  return right;
}

// Test cases
console.log(ArrayJumping([1, 2, 3, 4, 2])); // Output: 3
console.log(ArrayJumping([1, 7, 1, 1, 1, 1])); // Output: 2

/*
function arrayJumping(arr) {
  const max = Math.max(...arr);
  const startIndex = arr.indexOf(max);

  let queue = [[startIndex]];

  while (queue.length !== 0) {
    const nextQueue = [];

    for (let i = 0; i < queue.length; i++) {
      const indexList = queue[i];
      const lastIndex = indexList[indexList.length - 1];

      const left =
        (((lastIndex - arr[lastIndex]) % arr.length) + arr.length) % arr.length;
      const right = (lastIndex + arr[lastIndex]) % arr.length;

      if (left === startIndex || right === startIndex) {
        // Success!
        return indexList.length;
      }

      if (!indexList.includes(left)) {
        const leftArr = indexList.slice();
        leftArr.push(left);
        nextQueue.push(leftArr);
      }

      if (!indexList.includes(right)) {
        const rightArr = indexList.slice();
        rightArr.push(right);
        nextQueue.push(rightArr);
      }
    }
    queue = nextQueue;
  }

  // No path possible
  return -1;
}
console.log(arrayJumping([2, 3, 5, 6, 1]));
*/
