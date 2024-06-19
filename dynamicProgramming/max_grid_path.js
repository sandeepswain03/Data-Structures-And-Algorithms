function maxPath(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;
  if (pos in memo) return memo[pos];
  if (row >= grid.length || col >= grid[0].length) {
    return -Infinity;
  }

  //chec if you have arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  const rightPath = maxPath(grid, row, col + 1, memo);
  const downPath = maxPath(grid, row + 1, col, memo);
  memo[pos] =grid[row][col] + Math.max(rightPath + downPath);
  return memo[pos];
}
