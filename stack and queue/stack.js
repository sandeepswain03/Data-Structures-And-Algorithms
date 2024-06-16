class stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  clear() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  contains(data) {
    return this.stack.includes(data);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
    }
    return str;
  }
}

let myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.isEmpty());
console.log(myStack.contains(2));
myStack.reverse();
console.log(myStack.printStack());
