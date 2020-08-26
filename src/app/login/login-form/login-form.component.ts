import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationserviceService } from 'src/app/services/authenticationservice.service';
import { RouterService } from 'src/app/services/router.service';
import { JsonserviceService } from 'src/app/services/jsonservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


    errMessage: string = '';
    formDetails: FormGroup;
    // prompt: boolean = false;

    constructor(private authService: AuthenticationserviceService, private routerService: RouterService, private jsonInteractor: JsonserviceService){}

    ngOnInit() {
      this.formDetails = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      })
    }

    get username(){
      return this.formDetails.get('username');
    }

    get password(){
      return this.formDetails.get('password');
    }

     loginSubmit() {
      let isAllowed = this.authService.isAuthenticated(this.formDetails.value);
      if(isAllowed === true){
        this.jsonInteractor.fetchAllFavArticles(this.formDetails.value);
      }
      else{
        alert('Unauthorized Login');
      }
    }

    backToHomePage(){
      this.routerService.routeToArticleDisplay();
    }

}
