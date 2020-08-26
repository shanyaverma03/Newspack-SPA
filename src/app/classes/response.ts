import { ArticleInfo } from './article-info';

export class Response {
    constructor(
        public status?: string,
        public totalresults?: number,
        public articles?: Array<ArticleInfo>
    ){}
}
