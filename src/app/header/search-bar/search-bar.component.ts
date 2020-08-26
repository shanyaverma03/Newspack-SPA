import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { ArticleInfo } from 'src/app/classes/article-info';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public query: string;
  public articles: Array<ArticleInfo> = [];

  constructor(private apiInteractor: ApiserviceService, private router: RouterService) { }

  ngOnInit() {
  }

  searchQuery(){
    if(this.apiInteractor.searchQuery(this.query)){
      let search = this.query;
      this.query = null;
      this.router.routeToSearchResult(search);
    }
    else{
      console.log('SEARCH QUERY FAILS');
    }
  }

}
