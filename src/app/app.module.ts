import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module'; 
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule} from './login/login.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    DashboardModule,
    HttpClientModule,
    LoginModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
