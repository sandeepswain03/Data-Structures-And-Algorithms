// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSumWithBfs = (root) => {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    sum += node.data;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};

const treeSumWithDfs = (root) => {
  if (root === null) {
    return 0;
  }

  let stack = [root];
  let sum = 0;
  while (queue.length > 0) {
    let node = stack.pop();
    sum += node.data;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
};

const treeSumWithDfsRecursive = (root) => {
  if (root === null) {
    return 0;
  }

  return (
    root.data +
    treeSumWithDfsRecursive(root.left) +
    treeSumWithDfsRecursive(root.right)
  );
};
