class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.length = values.length;
    if (!values.length) return this;
    let node = new Node(values[0]);
    this.head = node;
    for (let i = 1; i < values.length; i++) {
      node.next = new Node(values[i]);
      node = node.next;
    }
    this.tail = node;
  }

  append(value) {
    this.length++;
    const node = new Node(value);
    if (!(this.head || this.tail)) {
      this.head = node;
      this.tail = node;
      return node.value;
    }
    const temp = this.tail;
    this.tail = node;
    temp.next = node;
    return node.value;
  }

  prepend(value) {
    this.length++;
    const node = new Node(value);
    if (!(this.head || this.tail)) {
      this.head = node;
      this.tail = node;
      return node;
    }
    node.next = this.head;
    this.head = node;
    return node.value;
  }

  remove(index) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return null;
    }
    if (index === 0 && this.length) {
      const temp = this.head;
      this.head = temp.next;
      this.length--;
      return temp.value;
    }
    if (!index) {
      index = this.length - 1;
    }
    if (!this.length) return null;
    const pre = this.get(index - 1, true);
    if (!pre) return null;
    const temp = pre.next;
    pre.next = pre.next.next;
    if (pre.next === null) {
      this.tail = pre;
    }
    this.length--;
    return temp.value;
  }

  insert(value, index = 0) {
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    this.length++;
    const node = new Node(value);
    const pre = this.get(index - 1, true);
    node.next = pre.next;
    pre.next = node;
    return node.value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  get(index, fullNode = false) {
    if (this.length <= index || index < 0) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return fullNode ? node : node && node.value;
  }

  set(index, value) {
    const node = this.get(index, true);
    if (!node) return null;
    node.value = value;
    return node.value;
  }

  forEach(fn, getNodes = false) {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      fn(getNodes ? node : node.value, i, node.next);
      node = node.next;
    }
  }

  reduce(fn, accumilator = 0, getNodes = false) {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      accumilator = fn(accumilator, getNodes ? node : node.value, i, node.next);
      node = node.next;
    }
    return accumilator;
  }

  toArray(getNodes = false) {
    return this.reduce(
      (acc, nodeOrValue) => {
        acc.push(nodeOrValue);
        return acc;
      },
      [],
      getNodes
    );
  }
}
