class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("given prevNode cannot be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // nothing to delete
  }

  if (!this.head.next) {
    this.head = null; // if there is only one node
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.deleteANodeWithKey = function (Key) {
  if (!this.head) {
    return;
  }

  if (this.head.data === Key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    if (current.next.data === Key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};

LinkedList.prototype.search = function (Key) {
  let current = this.head;
  while (current) {
    if (current.data === Key) {
      return true;
    }

    current = current.next;
  }

  return false;
};

LinkedList.prototype.traversal = function () {
  let current = this.head;

  let listValues = [];

  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  console.log(listValues.join(" -> "));
};

LinkedList.prototype.reverse = function () {
  if (!this.head) {
    return;
  }
  let curr = this.head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
};

const myLinkedList = new LinkedList();

myLinkedList.insertAtBeginning(10);
myLinkedList.insertAtBeginning(20);
myLinkedList.insertAtBeginning(40);
myLinkedList.insertAtEnd(30);
myLinkedList.traversal();
