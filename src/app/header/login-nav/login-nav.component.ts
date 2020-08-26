import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from 'src/app/services/authenticationservice.service';
import { RouterService } from 'src/app/services/router.service';
import { JsonserviceService } from 'src/app/services/jsonservice.service';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css']
})
export class LoginNavComponent implements OnInit {

  constructor(private authService: AuthenticationserviceService, private router: RouterService,private jsonInteractor:JsonserviceService) {
  }

  ngOnInit() {
  }

  naviagteToLogin(){
    if(this.authService.isLogged() === true){
      alert("Already Logged In");
    }else{
      this.router.routeToLogin();
    }
  }

  logoutsession(){
    if(this.authService.isLogged() === false){
      alert("User Never Logged In");
    }else{
      this.authService.logout();
      this.jsonInteractor.favouriteArticles = [];
      this.jsonInteractor.favouritesSubject.next(this.jsonInteractor.favouriteArticles);
      this.router.routeToArticleDisplay();
    }
  }

  naviagteToHomePage(){
    this.router.routeToArticleDisplay();
  }
}
