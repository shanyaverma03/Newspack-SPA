import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-headerband',
  templateUrl: './headerband.component.html',
  styleUrls: ['./headerband.component.css']
})
export class HeaderbandComponent implements OnInit {

  constructor(private router: RouterService) { }

  ngOnInit() {
  }

  goToHomePage(){
    this.router.routeToArticleDisplay();
  }
}
