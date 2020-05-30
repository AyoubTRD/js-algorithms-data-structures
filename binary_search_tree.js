class QNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const node = new QNode(value)
    if (!this.size) {
      this.first = node
      this.last = node
      return ++this.size
    }
    this.last.next = node
    this.last = node
    return ++this.size
  }

  dequeue() {
    if (!this.size) return null
    const node = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size--
      return node.value
    }
    this.first = node.next
    this.size--
    return node.value
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = value !== undefined ? new Node(value) : null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
        this.root = node
        return this
    }
    let parent = this.root;
    while (true) {
      if (node.value === parent.value) return this
      if (node.value - parent.value > 0) {
        if (!parent.right) break;
        parent = parent.right;
        continue;
      }
      if (!parent.left) break;
      parent = parent.left;
    }
    parent[node.value - parent.value > 0 ? "right" : "left"] = node;
    return this;
  }

  find(value, getNode=false) {
      if (!this.root) return null
      function helper(node) {
          if (!node) return getNode ? node : false
          if (node.value === value) return getNode ? node : true
          if (value - node.value > 0) return helper(node.right)
          return helper(node.left)
      }
      return helper(this.root)
  }

  breadthFirstSearch() {
      if (!this.root) return []
      const values = []
      const queue = new Queue()
      queue.enqueue(this.root)
      let node = queue.dequeue()
      while (node) {
          values.push(node.value)
          if (node.left) queue.enqueue(node.left)
          if (node.right) queue.enqueue(node.right)
          node = queue.dequeue()
      }
      return values
  }

  toArray = this.breadthFirstSearch
}

let tree = new BinarySearchTree(0);
tree.insert(4);
tree.insert(1);
tree.insert(12);
tree.insert(1);
tree.insert(-4);
tree.toArray()