class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }
  /**
   * Adds a new TreeNode to BST.
   * @param value Value of the Tree node to be added to BST
   */
  addToTree(value: T): boolean {
    const newNode = new TreeNode<T>(value);
    if (this.root == null) {
      this.root = newNode;
      return true;
    } else {
      let currentNode = this.root;
      let traversing = true;
      while (traversing) {
        if (currentNode.value == newNode.value) {
          //Duplicates are not accepted.
          traversing = false;
          return false;
        } else if (newNode.value < currentNode.value) {
          // Traverse left of the node
          if (currentNode.left == null) {
            //Add to the left of the current node
            currentNode.left = newNode;
            traversing = false;
            return true;
          } else {
            //Traverse the left of the current node
            currentNode = currentNode.left;
          }
        } else if (newNode.value > currentNode.value) {
          // Traverse right of the node
          if (currentNode.right == null) {
            //Add to the right of the current node
            currentNode.right = newNode;
            traversing = false;
            return true;
          } else {
            //Traverse the left of the current node
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  /**
   * Traverse the tree in Breath-First-Search pattern and returns th array of values in BFS order
   */
  BFS(): T[] {
    let queue = new Array<TreeNode<T>>();
    let visited = new Array<T>();
    queue.push(this.root);
    while (queue.length !== 0) {
      let current = queue.shift();
      visited.push(current.value);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return visited;
  }

  /**
   * Traverse the tree in Depth-First-Search PreOrder pattern and returns th array of values in the same order
   */
  DFSPreOrder(): T[] {
    let visited = new Array<T>();
    let current = this.root;

    function _traverse(node: TreeNode<T>) {
      visited.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }

    _traverse(current);
    return visited;
  }

  /**
   * Traverse the tree in Depth-First-Search PostOrder pattern and returns th array of values in the same order
   */
  DFSPostOrder(): T[] {
    let visited = new Array<T>();
    let current = this.root;

    function _traverse(node: TreeNode<T>) {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      visited.push(node.value);
    }

    _traverse(current);
    return visited;
  }

  /**
   * Traverse the tree in Depth-First-Search InOrder pattern and returns th array of values in the same order
   */
  DFSInOrder(): T[] {
    let visited = new Array<T>();
    let current = this.root;

    function _traverse(node: TreeNode<T>) {
      if (node.left) _traverse(node.left);
      visited.push(node.value);
      if (node.right) _traverse(node.right);
    }
    _traverse(current);
    return visited;
  }
}
