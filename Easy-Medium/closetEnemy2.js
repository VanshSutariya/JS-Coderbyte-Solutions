const grid = ["000", "100", "200"];

const closestEnemy = (grid) => {
  grid = grid.map((str) => str.split(""));
  let n = grid.length;
  let m = grid[0].length;

  let row = 0;
  let col = 0;

  let found = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        row = i;
        col = j;
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }

  visited = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(0);
    }
    visited.push(temp);
  }

  findTheMinDist(row, col, grid, visited, 0, n, m);
  return ans;
};

let ans = Number.MAX_SAFE_INTEGER;

let directions = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

const findTheMinDist = (row, col, grid, visited, dist, n, m) => {
  if (row < 0 || col < 0 || row >= n || col >= m) {
    row = ((row % n) + n) % n;
    col = ((col % m) + m) % m;
  }

  if (visited[row][col] === 1) {
    return 0;
  }
  visited[row][col] = 1;
  if (grid[row][col] === "2") {
    ans = Math.min(ans, dist);
    return dist;
  }

  for (const [r, c] of directions) {
    let delRow = row + r;
    let delCol = col + c;
    findTheMinDist(delRow, delCol, grid, visited, dist + 1, n, m);
  }
};

const output = closestEnemy(grid);
console.log(output);

// const grid = ["0000", "1000", "0002", "0002"];

// // 0000;
// // 2010;
// // 0000;
// // 2002;
// function closestEnemy(grid) {
//   grid = grid.map((arr) => arr.split(""));
//   let n = grid.length;
//   let m = grid[0].length;

//   let row = 0;
//   let col = 0;
//   let found = false;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (grid[i][j] == "1") {
//         row = i;
//         col = j;
//         found = true;
//         break;
//       }
//     }
//     if (found) {
//       break;
//     }
//   }

//   let visited = [];
//   for (let i = 0; i < n; i++) {
//     let temp = [];
//     for (let j = 0; j < m; j++) {
//       temp.push(0);
//     }
//     visited.push(temp);
//   }
//   findMindist(row, col, grid, visited, 0, n, m);
//   return ans;
// }
// let ans = Number.MAX_SAFE_INTEGER;
// let directions = [
//   [0, -1],
//   [0, 1],
//   [-1, 0],
//   [1, 0],
// ];

// function findMindist(row, col, grid, visited, dist, n, m) {
//   if (row < 0 || col < 0 || row >= n || col >= m) {
//     row = ((row % n) + n) % n;
//     col = ((col % m) + m) % m;
//   }

//   if (visited[row][col] == 1) {
//     return 0;
//   }
//   visited[row][col] = 1;
//   if (grid[row][col] == "2") {
//     ans = Math.min(ans, dist);
//     return dist;
//   }
//   for (const [r, c] of directions) {
//     let delrow = row + r;
//     let delcol = col + c;
//     findMindist(delrow, delcol, grid, visited, dist + 1, n, m);
//   }
// }
// const output = closestEnemy(grid);
// console.log(output);
