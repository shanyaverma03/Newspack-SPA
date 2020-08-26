import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-viewfavoriteslink',
  templateUrl: './viewfavoriteslink.component.html',
  styleUrls: ['./viewfavoriteslink.component.css']
})
export class ViewfavoriteslinkComponent implements OnInit {

  constructor(private router: RouterService) { }

  ngOnInit() {
  }

  naviagteToFavourites(){
    this.router.routeToFavourites();
  }

}
