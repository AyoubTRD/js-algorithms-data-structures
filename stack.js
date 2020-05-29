class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.prev = this.last;
    this.last = node;
    return ++this.length;
  }

  pop() {
    if (!this.length) return null;
    const node = this.last;
    this.last = this.last.prev;
    this.length--;
    return node.value;
  }
}

module.exports = Stack;
