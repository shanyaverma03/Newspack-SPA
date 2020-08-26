import { Component, OnInit } from '@angular/core';
import { ArticleInfo } from '../../classes/article-info';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {

  public articles: Array<ArticleInfo> = [];
  public errMessage: string;
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getAllArticles().subscribe(data => {
      if(data){
          console.log(data);
        data.articles.forEach(element => {
          if(element.urlToImage != null){
          // let article = new ArticleInfo(element.author,element.title,element.urlToImage,element.content,element.url);
          this.articles.push(element);
          }
        });
        console.log("SUCCESS API GETALL");
      }
      else{
        this.errMessage = 'Fetch From API Failed';
      }
    },error => {
      this.errMessage = 'Fetch From API Failed 2';
    })
  }

}
