import { Injectable } from '@angular/core';
import { ArticleInfo } from '../classes/article-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../classes/user-details';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../classes/user-profile';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  public favouriteArticles: Array<ArticleInfo> = [];
  public favouritesSubject = new BehaviorSubject<Array<ArticleInfo>>(this.favouriteArticles);

  constructor(private httpCLient: HttpClient,private router: RouterService) { }

  fetchAllFavArticles(userDetails: UserDetails){
    console.log(userDetails);
    this.httpCLient.get<Array<UserProfile>>('http://localhost:3000/profiles').subscribe(data => {
      let flag =0;
      if(data){
        console.log("FETCH");
        console.log(data);
        data.forEach(element => {
          if(element.username === userDetails.username){
            this.favouriteArticles = element.favourites;
            this.favouritesSubject.next(this.favouriteArticles);
            flag = 1;
            console.log("FAVOURITESARTICLES");
            console.log(this.favouriteArticles);
            alert("EXIT JSON, ENTER FAV");
            this.router.routeToFavourites();
          }
        })
      }
      if(flag === 0){
        console.log("NOTHING FOUND");
        this.favouriteArticles = [];
        this.favouritesSubject.next(this.favouriteArticles);
        this.router.routeToFavourites();
      }
    },error => {
      alert("FETCH JSON FAILED");
    });
  }

  getAllFavs(): BehaviorSubject<Array<ArticleInfo>>{
    return this.favouritesSubject;
  }

  addToFavourites(currentUser: UserDetails, currentArticle: ArticleInfo){
    
    this.favouriteArticles.push(currentArticle);
    this.favouritesSubject.next(this.favouriteArticles);
    let updated = new UserProfile();
    // currentUser.username,this.favouriteArticles
    updated.username = currentUser.username;
    updated.favourites = this.favouriteArticles;
    return this.httpCLient.post<UserProfile>('http://localhost:3000/profiles',updated);
    
  } 

  putInFavourites(currentUser: UserDetails, currentArticle: ArticleInfo){
    this.favouriteArticles.push(currentArticle);
    this.favouritesSubject.next(this.favouriteArticles);
    this.httpCLient.get<Array<UserProfile>>(`http://localhost:3000/profiles?username=${currentUser.username}`).subscribe(data=>{
        if(data.length>0){
          let updated = new UserProfile();
          // let updated = new UserProfile(currentUser.username,this.favouriteArticles,data[0].id);
          updated.username = currentUser.username;
          updated.favourites = this.favouriteArticles;
          updated.id = data[0].id;
          this.httpCLient.put<UserProfile>(`http://localhost:3000/profiles/${data[0].id}`,updated).subscribe(
            data => {
              if(data){
                alert("Item Added to favourites");
              }else{
                alert('Unable to add the article.');
              }
            },error => alert('Http failure response for http://localhost:3000/profiles: 404 Not Found'));
        }
      },error=>{
        console.log("PUT ERROR");
      });
      
  }

  deleteFromFavourites(currentUser: UserDetails, currentArticle: ArticleInfo) {
    let index = this.favouriteArticles.findIndex(article => article.title === currentArticle.title);
    this.favouriteArticles.splice(index,1);
    this.favouritesSubject.next(this.favouriteArticles);
    // delete from server
    if(this.favouriteArticles.length>0){
      this.httpCLient.get<Array<UserProfile>>(`http://localhost:3000/profiles?username=${currentUser.username}`).subscribe(data=>{
        if(data.length>0){
          let updated = new UserProfile();
          // let updated = new UserProfile(currentUser.username,this.favouriteArticles,data[0].id);
          updated.username = currentUser.username;
          updated.favourites = this.favouriteArticles;
          updated.id = data[0].id;
          this.httpCLient.put<UserProfile>(`http://localhost:3000/profiles/${data[0].id}`,updated).subscribe(
            data => {
              if(data){
                console.log("DELETED");
              }else{
                alert('Unable to add the article.');
              }
            },error => alert('Http failure response for http://localhost:3000/profiles: 404 Not Found'));
        }
      },error=>{
        console.log("PUT ERROR");
      });
    }
    else{
      this.httpCLient.get<Array<UserProfile>>(`http://localhost:3000/profiles?username=${currentUser.username}`).subscribe(data=>{
        if(data.length>0){
          this.httpCLient.delete(`http://localhost:3000/profiles/${data[0].id}`).subscribe(
            data => {
              if(data){
                console.log("DELETED");
              }else{
                alert('Unable to add the article.');
              }
            },error => alert('Http failure response for http://localhost:3000/profiles: 404 Not Found'));
        }
      },error=>{
        console.log("PUT ERROR");
      });
    }
  }
}
