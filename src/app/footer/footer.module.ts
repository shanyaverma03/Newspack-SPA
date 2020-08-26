import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [FooterComponent, FooterLinksComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { 
}
