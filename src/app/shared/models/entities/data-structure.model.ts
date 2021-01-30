export interface INode<T> {
  value: T | null;
  next: INode<T> | null;
}

export interface IMoveData<T> {
  sendToDataStructure(structure: IMoveData<T>, value?: T): void;
  getValue(value?: T): T;
  setValue(value?: T): void;
}

export class DataStructure<T> {
  protected size: number = 0;
  protected head: INode<T> | null = null;

  isEmpty(): boolean {
    return this.size === 0;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    while (current !== null) {
      if (current.value !== null) arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export class DataNode<T> implements INode<T> {
  constructor(public value: T, public next: INode<T> | null = null) {}
}

export class NumberNode<T = number> extends DataNode<T> {}
