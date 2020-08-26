import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbandComponent } from './headerband/headerband.component';
import { ViewfavoriteslinkComponent } from './viewfavoriteslink/viewfavoriteslink.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { LoginNavComponent } from './login-nav/login-nav.component';

@NgModule({
  declarations: [HeaderbandComponent, ViewfavoriteslinkComponent, SearchBarComponent, NavBarComponent, LoginNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    HeaderbandComponent,
    NavBarComponent
  ]
})
export class HeaderModule { }
