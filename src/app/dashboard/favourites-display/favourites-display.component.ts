import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from 'src/app/services/jsonservice.service';
import { ArticleInfo } from 'src/app/classes/article-info';

@Component({
  selector: 'app-favourites-display',
  templateUrl: './favourites-display.component.html',
  styleUrls: ['./favourites-display.component.css']
})
export class FavouritesDisplayComponent implements OnInit {

  public favArticles: Array<ArticleInfo> = [];
  public errMessage: string;
  public isFav = true;

  constructor(private jsonInteractor: JsonserviceService) { 
    console.log("ETERED FAV");
  }

  ngOnInit() {
    this.jsonInteractor.getAllFavs().subscribe(data => {
      if(!data || data.length === 0){
        this.errMessage = 'No Favourites Found';
        
      }else{
        this.favArticles = data;
      }
    });
  }

}
