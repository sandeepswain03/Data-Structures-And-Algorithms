class BstNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BstTree {
  constructor() {
    this.root = null;
  }
}

BstTree.prototype.insert = function (key) {
  const newNode = new BstNode(key);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};
BstTree.prototype.insertNode = function (node, newNode) {
  // node -> this.root
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
};

BstTree.prototype.delete = function (key) {
  this.root = this.deleteNode(this.root, key);
};
BstTree.prototype.deleteNode = function (node, key) {
  // node -> this.root
  if (node === null) {
    //if the root is null
    return null;
  }

  if (key < node.key) {
    node.left = this.deleteNode(node.left, key); //if the key is in left
  } else if (key > node.key) {
    node.right = this.deleteNode(node.right, key); //if the key is in right
  } else {
    if (node.left === null && node.right === null) {
      //if there is node child
      return null;
    } else if (node.left === null) {
      //if there is one child in right
      return node.right;
    } else if (node.right === null) {
      //if there is one child in left
      return node.left;
    } else {
      //in-order successor -> for getting the smallest key from right
      let tempNode = this.findMinNode(node.right);
      node.key = tempNode.key;
      node.right = this.deleteNode(node.right, tempNode.key);
    }
  }
  return node;
};
BstTree.prototype.findMinNode = function (node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

//inOrder traversal
BstTree.prototype.inOrderTraversal = function () {
  const result = [];
  this.inOrder(this.root, result);
  return result;
};
BstTree.prototype.inOrder = function () {
  if (node !== null) {
    this.inOrder(node.left, result);
    result.push(node.key);
    this.inOrder(node.right, result);
  }
};
//preOrder traversal
BstTree.prototype.preOrderTraversal = function () {
  const result = [];
  this.preOrder(this.root, result);
  return result;
};
BstTree.prototype.preOrder = function () {
  if (node !== null) {
    result.push(node.key);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
  }
};
//postOrder traversal
BstTree.prototype.postOrderTraversal = function () {
  const result = [];
  this.postOrder(this.root, result);
  return result;
};
BstTree.prototype.postOrder = function () {
  if (node !== null) {
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.key);
  }
};

