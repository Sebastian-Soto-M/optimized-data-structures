import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LibrariessModule } from './libraries.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, LibrariessModule],
  exports: [CommonModule, MaterialModule, LibrariessModule],
})
export class SharedModule {}
