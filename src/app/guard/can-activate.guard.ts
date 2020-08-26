import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationserviceService } from '../services/authenticationservice.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationserviceService, private router: RouterService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authenticationService.isAuth){
        this.router.routeToLogin();
        return false;
      }
      else{
        return true;
      }
  }
  
}
