import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginFormComponent} from './login-form/login-form.component'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
