import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
import { QueueComponent } from './views/queue/queue.component';
import { StackComponent } from './views/stack/stack.component';
import { TreeComponent } from './views/tree/tree.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'stack', component: StackComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
