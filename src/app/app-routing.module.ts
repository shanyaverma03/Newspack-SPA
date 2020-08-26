import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { ArticleDisplayComponent } from './dashboard/article-display/article-display.component';
import { FavouritesDisplayComponent } from './dashboard/favourites-display/favourites-display.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { SearchResultComponent } from './dashboard/search-result/search-result.component';


const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardContainerComponent,
    children: [
      {
        path:'view/articles',
        component: ArticleDisplayComponent
      },
      {
        path: 'view/favourites',
        component: FavouritesDisplayComponent,
        canActivate: [CanActivateGuard]
      },
      {
        path:'view/searchResults',
        component: SearchResultComponent
      },
      {
        path: '',
        redirectTo: '/dashboard/view/articles',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path:'',
    redirectTo: '/dashboard/view/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
