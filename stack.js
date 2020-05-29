class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.prev = this.last;
    this.last = node;
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    const node = this.last;
    this.last = this.last.prev;
    this.size--;
    return node.value;
  }
}

module.exports = Stack;
