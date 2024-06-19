function biggestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);
    let size = 1;
    for (const neighbour of graph[node]) {
      size += dfs(neighbour); // size = size + dfs(neighbour)
    }
    return size;
  }

  //iterate over the graph
  for (let node in graph) {
    if (!visited.has(node)) {
      let componentSize = dfs(node);
      if (componentSize > largest) {
        largest = componentSize;
      }
    }
  }
}
