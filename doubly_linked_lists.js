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

  append(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
      this.length++;
      return node.value;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node.value;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
      this.length++;
      return node.value;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return node.value;
  }

  remove(index) {
    if (this.length === 0) return null;
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node.value;
    }
    if (index === 0) {
      const node = this.head;
      this.head = node.next;
      this.head.prev = null;
      this.length--;
      return node.value;
    }
    if (!index) {
      const node = this.tail;
      this.tail = node.prev;
      this.tail.next = null;
      this.length--;
      return node.value;
    }
    const node = this.get(index, true);
    if (!node) return null;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node.value;
  }

  insert(index = 0, value) {
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    const node = this.get(index, true);
    if (!node) return null;
    const createdNode = new Node(value);
    createdNode.prev = node.prev;
    createdNode.next = node;
    node.prev.next = createdNode;
    node.prev = createdNode;
    this.length++;
    return createdNode.value;
  }

  set(index, value) {
    const node = this.get(index, true);
    if (!node) return null;
    node.value = value;
    return node.value;
  }

  get(index = 0, fullNode = false) {
    if (index > this.length || index < 0) return null;
    const mid = Math.floor(this.length / 2);
    if (index > mid) {
      let node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
      return fullNode ? node : node && node.value;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return fullNode ? node : node && node.value;
  }
}

module.exports = DoublyLinkedList;
