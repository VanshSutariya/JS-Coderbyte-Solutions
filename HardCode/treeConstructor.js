// function TreeConstructor(strArr) {
//   const map = new Map();

//   for (let i = 0; i < strArr.length; i++) {
//     let parent = strArr[i][3];

//     if (map.has(parent)) {
//       map.set(parent, map.get(parent) + 1);
//     } else {
//       map.set(parent, 1);
//     }
//   }

//   for (const [key, val] of map) {
//     if (val > 2) {
//       return "false";
//     }
//   }

//   return "true";
// }

// // keep this function call here
// console.log(TreeConstructor(readline()));

function TreeConstructor(strArr) {
  let map = new Map();
  for (let i = 0; i < strArr.length; i++) {
    let parent = strArr[i][3];
    if (map.has(parent)) {
      map.set(parent, map.get(parent) + 1);
    } else {
      map.set(parent, 1);
    }
  }

  for (const [key, val] of map) {
    if (val > 2) {
      return false;
    }
  }
  return true;
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
