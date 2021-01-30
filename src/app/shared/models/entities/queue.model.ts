import { DataNode, DataStructure, INode } from './data-structure.model';

export interface IQueue<T> {
  enqueue(value: T): void;
  dequeue(): T | null;
  peek(): T | null;
}

export class Queue<T> extends DataStructure<T> implements IQueue<T> {
  private tail: INode<T> | null;
  constructor() {
    super();
    this.tail = null;
  }

  enqueue(value: T): void {
    const node = new DataNode<T>(value) as INode<T>;
    if (this.head === null) this.head = this.tail = node;
    else {
      this.tail!.next = node;
      this.tail = this.tail!.next;
    }
    ++this.size;
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;
    const item = this.head!.value;
    this.head = this.head!.next;
    if (!this.isEmpty()) this.tail = null;
    --this.size;
    return item;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.head!.value;
  }
}
