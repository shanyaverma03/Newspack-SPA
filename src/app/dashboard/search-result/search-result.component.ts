import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleInfo } from 'src/app/classes/article-info';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public resultArray: Array<ArticleInfo>; 
  public searchString: string;
  public errMessage: string;

  constructor(private apiService: ApiserviceService,private route: ActivatedRoute) {
    this.resultArray = [];
   }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log("ENTERED SEACRH BAR");
    //   console.log(params);
    //   this.resultArray = params.query;
    //   console.log(this.resultArray);
    // });
    this.apiService.getBehaviourSubject().subscribe(data => {
      
      if(data.length !== 0){
        console.log("HAVE DATA");
        this.errMessage = '';
        this.resultArray = data;
        console.log("ENTER PARAM");
        this.route.queryParams.subscribe(params => {
          console.log("QUERY :"+params.query);
          this.searchString = params.query;
        })
        console.log("EXIT PARAM");
      }else{
        this.errMessage = 'No Article Matches Search String';
      }
    })

    
  }



}
