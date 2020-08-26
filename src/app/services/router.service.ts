import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleInfo } from '../classes/article-info';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToFavourites(){
    console.log("FAVS");
    this.router.navigate(['dashboard','view','favourites']);
  }

  routeToLogin(){
    this.router.navigate(['login']);
  }

  routeToArticleDisplay(){
    this.router.navigate(['dashboard','view','articles']);
  }

  routeBack(){
    this.location.back();
  }

  routeToSearchResult(queryString: string){
    console.log(queryString);
    this.router.navigate(['dashboard','view','searchResults'],{
      queryParams: { query : queryString }
    });
  }

  // routeToSearchResult(){
  //   this.router.navigate(['dashboard','view','searchResults']);
  // }

}
