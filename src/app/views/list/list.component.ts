import { Component, OnInit } from '@angular/core';
import { List } from '@shared/models/entities/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  ds = new List<number>();

  constructor() {}

  ngOnInit(): void {
    this.ds.add(10);
    this.ds.add(0);
    this.ds.add(30);
    this.ds.add(80);
    this.ds.add(14);
    console.log(this.ds.size());
    this.ds.removeAt(1);
    console.log(this.ds.size());
  }
}
