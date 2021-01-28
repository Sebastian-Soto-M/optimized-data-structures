import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [LayoutModule],
})
export class CoreModule {}
