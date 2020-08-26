import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { ArticleComponent } from './article/article.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FavouritesDisplayComponent } from './favourites-display/favourites-display.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
     ArticleDisplayComponent,
     ArticleComponent, 
     DashboardContainerComponent, 
     FavouritesDisplayComponent, 
     SearchResultComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
    // AppRoutingModule
  ],
  exports: [
    ArticleDisplayComponent,
    FavouritesDisplayComponent,
    SearchResultComponent,
    DashboardContainerComponent
  ]
})
export class DashboardModule { }
