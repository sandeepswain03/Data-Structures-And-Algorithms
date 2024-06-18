// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// itreative approach
const breadthFirstTraversalIterative = (root) => {
  if (root === null) {
    return null;
  }
  const values = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();// point of optimaization
    values.push(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return values;
};

