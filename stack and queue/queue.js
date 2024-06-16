class queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  clear() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  contains(data) {
    return this.stack.includes(data);
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " ";
    }
    return str;
  }
}

let myQueue = new queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue.printQueue());
