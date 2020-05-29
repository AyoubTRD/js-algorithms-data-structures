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
      this.root = node;
      return this;
    }
    let parent = this.root;
    while (true) {
      if (node.value === parent.value) return this;
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
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(1);
tree.insert(12);
tree.insert(1);
tree.insert(-4);

module.exports = BinarySearchTree;
