import { Component, OnInit } from '@angular/core';
import { Stack } from '@shared/models/entities/stack.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  ds = new Stack<number>();

  constructor() {}

  ngOnInit(): void {
    this.ds.push(10);
    this.ds.push(0);
    this.ds.push(30);
    this.ds.push(80);
    this.ds.push(14);
    this.ds.pop();
  }
}
