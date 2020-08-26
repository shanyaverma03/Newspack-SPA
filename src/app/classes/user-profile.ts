import { UserDetails } from './user-details';
import { ArticleInfo } from './article-info';

export class UserProfile {
    // constructor(public username: string,public favourites?: Array<ArticleInfo>,public id?:number){}
    id: number;
    username: string;
    favourites: Array<ArticleInfo>;

  constructor() {
    this.username = '';
    this.favourites = [];
  }
}
