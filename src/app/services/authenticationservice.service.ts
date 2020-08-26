import { Injectable } from '@angular/core';
import { UserDetails } from '../classes/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  public user: UserDetails[] = [];
  public isAuth = false;
  public currentUser: UserDetails;

  constructor() { 
    this.user = [
      {
        username: 'admin',
        password: 'password',
      },
      {
        username: 'guest',
        password: 'pass',
      },
      {
        username: 'ayush',
        password: 'ayush',
      }
    ];
  }

  isAuthenticated(userDetails){
    let index = this.user.findIndex(user => ((user.username == userDetails.username) && (user.password == userDetails.password)));
    if(index == -1){
      this.isAuth = false;
    }
    else{
      this.currentUser = new UserDetails(userDetails.username,userDetails.password);
      this.isAuth = true;
    }
    return this.isAuth;
  }

  isLogged(){
    return this.isAuth;
  }

  logout(){
    this.currentUser = null;
    this.isAuth = false; 
  }
}
