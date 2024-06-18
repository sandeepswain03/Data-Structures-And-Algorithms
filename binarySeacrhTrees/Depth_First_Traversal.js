// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// iterative approach
const depthFirstTraversalIterative = (root) => {
  if (root === null) {
    return null;
  }
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop(); //if value is there pop it
    values.push(node.data); // and add to values
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return values;
};

// recursive approach
const depthFirstTraversalRecursive = (root) => {
  if (root === null) {
    return null;
  }
  const leftValues = depthFirstTraversalRecursive(root.left);
  const rightValues = depthFirstTraversalRecursive(root.right);
  return [root.data, ...leftValues, ...rightValues]; // we have use spread operator because left and right values are arrays
};
