const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function depthFirstTraversalIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

function depthFirstTraversalRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighbor of graph[start]) {
      depthFirstTraversalRecursive(graph, neighbor, visited);
    }
  }
}
