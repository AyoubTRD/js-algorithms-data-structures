class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.length = values.length;
    if (!values.length) return this;
    let node = new Node(values[0]);
    this.head = node;
    for (let i = 1; i < values.length; i++) {
      node.next = new Node(values[i]);
      node.next.prev = node;
      node = node.next;
    }
    this.tail = node;
  }
}

const list = new DoublyLinkedList(1, 2, 3);
console.log(JSON.stringify(list));

module.exports = DoublyLinkedList;
