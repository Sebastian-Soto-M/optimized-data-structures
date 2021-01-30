import { Component, OnInit } from '@angular/core';
import { Queue } from '@shared/models/entities/queue.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  ds = new Queue<number>();

  constructor() {}

  ngOnInit(): void {
    this.ds.enqueue(10);
    this.ds.enqueue(0);
    this.ds.enqueue(30);
    this.ds.enqueue(80);
    this.ds.enqueue(14);
    this.ds.dequeue();
  }
}
