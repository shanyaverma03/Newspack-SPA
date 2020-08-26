import { Component, OnInit, Input } from '@angular/core';
import { ArticleInfo } from '../../classes/article-info';
import { AuthenticationserviceService } from 'src/app/services/authenticationservice.service';
import { JsonserviceService } from 'src/app/services/jsonservice.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  currentArticle: ArticleInfo;
  @Input()
  isFav:boolean = false;

  constructor(private authService: AuthenticationserviceService, private jsonInteractor: JsonserviceService,private router: RouterService) { 
  }

  ngOnInit() {
  }

  addFavs(){
    if(this.authService.isLogged()===true){
      let index = this.jsonInteractor.favouriteArticles.findIndex(article => article.title === this.currentArticle.title);
      if(index!=-1){
        alert("Article Already Added In Your Favourites");
      }else{
        if(this.jsonInteractor.favouriteArticles.length === 0){
          this.jsonInteractor.addToFavourites(this.authService.currentUser,this.currentArticle).subscribe(
            data => {
              if(data){
                alert("Item Added to favourites");
              }else{
                alert('Unable to add the article.');
              }
            },error => alert('Http failure response for http://localhost:3000/profiles: 404 Not Found'));
        }else{
          console.log("PUTTING....");
          this.jsonInteractor.putInFavourites(this.authService.currentUser,this.currentArticle);
        }
      }
    }else{
      alert("User Not Logged In Cannot Access Favourites");
      this.router.routeToLogin();
    }
  } 

  deleteFavs(){
    this.jsonInteractor.deleteFromFavourites(this.authService.currentUser,this.currentArticle);
  }

}
