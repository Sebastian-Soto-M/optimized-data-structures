import { DataStructure, DataNode } from './data-structure.model';

export interface IStack<T> {
  pop(): T | null;
  push(value: T): void;
  peek(): T | null;
}

export class Stack<T> extends DataStructure<T> implements IStack<T> {
  pop(): T | null {
    if (this.isEmpty()) return null;
    const value = this.head!.value;
    this.head = this.head!.next;
    --this.size;
    return value;
  }

  push(value: T): void {
    const node = new DataNode<T>(value);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    ++this.size;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.head!.value;
  }
}
