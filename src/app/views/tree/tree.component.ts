import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BinaryTree, ITree } from '@shared/models/entities/tree.model';
import { BehaviorSubject } from 'rxjs';

declare type SortType = 'RID' | 'IRD' | 'IDR';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit, ITree<number> {
  ds = new BinaryTree<number>();
  list: number[] = [];
  currentView = new BehaviorSubject<SortType>('IRD');
  searchNumber = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.currentView.subscribe((x: SortType) => {
      switch (x) {
        case 'RID':
          this.list = this.sortPreOrder();
          break;
        case 'IRD':
          this.list = this.sortInOrder();
          break;
        case 'IDR':
          this.list = this.sortPostOrder();
          break;
      }
    });
    this.add(6);
    this.add(4);
    this.add(8);
    this.add(3);
    this.add(5);
    this.add(7);
    this.add(9);
  }

  add(value: number): void {
    this.ds.add(value);
    this.currentView.next(this.currentView.value);
  }

  show(method: SortType): void {
    this.currentView.next(method);
  }

  sortPreOrder(): number[] {
    return this.ds.sortPreOrder();
  }

  sortInOrder(): number[] {
    return this.ds.sortInOrder();
  }

  sortPostOrder(): number[] {
    return this.ds.sortPostOrder();
  }
}
