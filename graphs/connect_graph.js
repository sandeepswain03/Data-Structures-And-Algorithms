const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function connectedIslands(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        dfs(neighbour);
      }
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}
