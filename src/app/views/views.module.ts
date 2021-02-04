import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { ChipsComponent } from './tree/chips/chips.component';

@NgModule({
  declarations: [
    HomeComponent,
    StackComponent,
    QueueComponent,
    ListComponent,
    TreeComponent,
    ChipsComponent,
  ],
  imports: [SharedModule],
  exports: [
    HomeComponent,
    StackComponent,
    QueueComponent,
    ListComponent,
    TreeComponent,
  ],
})
export class ViewsModule {}
