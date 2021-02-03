import { Component, OnInit } from '@angular/core';
import { BinaryTree } from '@shared/models/entities/tree.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  ds = new BinaryTree<number>();
  constructor() {}

  ngOnInit(): void {
    /**
     *                   10
     *           6               15
     *      3        8      11       20
     *   0
     */
    this.ds.addToTree(100);
    this.ds.addToTree(6);
    this.ds.addToTree(15);
    this.ds.addToTree(3);
    this.ds.addToTree(8);
    this.ds.addToTree(11);
    this.ds.addToTree(20);
    this.ds.addToTree(0);
    console.log('BFS: ' + this.ds.BFS());
    console.log('DFS-PreOrder: ' + this.ds.DFSPreOrder());
    console.log('DFS-PostOrder: ' + this.ds.DFSPostOrder());
    console.log('DFS-InOrder: ' + this.ds.DFSInOrder());
  }
}
