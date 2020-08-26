import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ArticleInfo } from '../classes/article-info';
import { Response } from '../classes/response';
import { SearchResponse } from '../classes/search-response';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  public apiKey = environment.apiKey;
  public searchResultArray: Array<ArticleInfo> = [];
  public searchResultSubject: BehaviorSubject<Array<ArticleInfo>> = new BehaviorSubject(this.searchResultArray);

  constructor(private apiInteractor: HttpClient) { }

  getAllArticles():Observable<Response>{
    return this.apiInteractor.get<Response>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`);
  }

  searchQuery(query: string) {
    console.log("QUERY");
    console.log(query);
    if(query){
      return this.apiInteractor.get<SearchResponse>(`http://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${this.apiKey}`)
     .subscribe(data => {
       if(data){
         console.log(data.articles);
        this.searchResultArray = data.articles;
        this.searchResultSubject.next(this.searchResultArray); 
       }
       else{
         console.log('No Records');
       }
       return true;
     },error=> {
       console.log('error fetch in behaviour 2');
       return false;
     });
    }
    else{
      alert("Please Enter Some Query");
      // this.searchResultArray = [];
      // this.searchResultSubject.next(this.searchResultArray);
      return false;
    }
    
  }

  getBehaviourSubject(): BehaviorSubject<Array<ArticleInfo>>{
    return this.searchResultSubject;
  }
}
