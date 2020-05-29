class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.size) {
      this.first = node;
      this.last = node;
      return ++this.size;
    }
    this.last.next = node;
    this.last = node;
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    if (this.size === 1) {
      const node = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return node.value;
    }
    const node = this.first;
    this.first = node.next;
    this.size--;
    return node.value;
  }
}

module.exports = Queue;
