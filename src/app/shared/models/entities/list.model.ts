import { DataNode, DataStructure, INode } from './data-structure.model';

export interface IList<T> {
  add(value: T): void;
  get(index: number): T | null;
  indexOf(value: T): number;
  reverse(): INode<T> | null;
  removeAt(index: number): void;
}

export class List<T> extends DataStructure<T> implements IList<T> {
  private tail: INode<T> | null;
  constructor() {
    super();
    this.tail = null;
  }

  add(value: T): void {
    const temp = new DataNode<T>(value);
    if (this.tail === null) this.head = this.tail = temp;
    else {
      this.tail.next = temp;
      this.tail = temp;
    }
    ++this._size;
  }

  get(index: number): T | null {
    if (this.head === null || this._size < index) return null;
    let temp = this.head;
    let counter = 0;
    while (counter < index && temp !== null) {
      temp = temp.next!;
      counter++;
    }
    return temp !== null ? temp.value : null;
  }

  indexOf(value: T): number {
    return this.head !== null ? this.indexOfRec(value, this.head, 0) : -1;
  }

  reverse(): INode<T> | null {
    return this.head !== null ? this.reverseRec(this.head) : null;
  }

  removeAt(index: number): void {
    if (!this.isEmpty()) {
      let temp = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = temp;
        temp = temp!.next;
      }
      if (prev !== null && temp !== null) {
        prev.next = temp.next;
      } else this.head = temp!.next;
      --this._size;
    }
  }

  private indexOfRec(value: T, current: INode<T>, position: number): number {
    if (current.value === value) return position;
    else if (current.next !== null)
      return this.indexOfRec(value, current.next, ++position);
    return -1;
  }

  private reverseRec(current: INode<T>): INode<T> | null {
    if (current === null) return null;
    if (current.next === null) {
      this.head = current;
      return current;
    }
    const temp = this.reverseRec(current.next);
    temp!.next = current;
    current.next = null;
    return current;
  }
}
