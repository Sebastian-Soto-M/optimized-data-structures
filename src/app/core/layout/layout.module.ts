import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MainComponent, FooterComponent, NavigationComponent],
  imports: [SharedModule],
  exports: [MainComponent, FooterComponent, NavigationComponent],
})
export class LayoutModule {}
