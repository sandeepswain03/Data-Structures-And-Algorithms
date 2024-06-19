function countPath(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;
  if (row >= grid.length || col >= grid[0].length || grid[row][col === "X"]) {
    return 0;
  }

  //chec if you have arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  // return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  const rightPath = countPath(grid, row, col + 1, memo);
  const downPath = countPath(grid, row + 1, col, memo);
  memo[pos] = rightPath + downPath;
  return memo[pos];
}
