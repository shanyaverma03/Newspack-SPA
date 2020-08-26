import { ArticleInfo } from './article-info';

export class SearchResponse {
    constructor(
        public status?: string,
        public totalResults?: number,
        public articles?: Array<ArticleInfo>
    ){}
}
