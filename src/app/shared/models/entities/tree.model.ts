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

export interface ITree<T> {
  add(value: T): void;
  sortPreOrder(): T[];
  sortInOrder(): T[];
  sortPostOrder(): T[];
  search?(value: T): boolean;
}

export class BinaryTree<T> implements ITree<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  add(value: T): void {
    this.root = this.recAdd(this.root, value);
  }

  private recAdd(current: TreeNode<T> | null, value: T): TreeNode<T> {
    if (current === null) return new TreeNode(value);
    if (value < current.value) current.left = this.recAdd(current.left, value);
    else if (value > current.value)
      current.right = this.recAdd(current.right, value);
    return current;
  }

  sortPreOrder(): T[] {
    const res: T[] = [];
    this.recPreOrder(this.root, res);
    return res;
  }

  private recPreOrder(node: TreeNode<T> | null, result: T[]) {
    if (node != null) {
      result.push(node.value);
      this.recPreOrder(node.left, result);
      this.recPreOrder(node.right, result);
    }
  }

  sortInOrder(): T[] {
    const res: T[] = [];
    this.recInOrder(this.root, res);
    return res;
  }

  private recInOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.recInOrder(node.left, result);
      result.push(node.value);
      this.recInOrder(node.right, result);
    }
  }

  sortPostOrder(): T[] {
    const res: T[] = [];
    this.recPostOrder(this.root, res);
    return res;
  }

  private recPostOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node != null) {
      this.recPreOrder(node.left, result);
      this.recPreOrder(node.right, result);
      result.push(node.value);
    }
  }

  search(value: T): boolean {
    return this.recSearch(this.root, value);
  }

  private recSearch(current: TreeNode<T> | null, value: T): boolean {
    if (current == null) return false;
    if (value == current.value) return true;
    return value < current.value
      ? this.recSearch(current.left, value)
      : this.recSearch(current.right, value);
  }
}
