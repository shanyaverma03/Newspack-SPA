export class ArticleInfo {
    constructor(
        public source?: {
            id: string,
            name: string
        },
        public author?: string,
        public title?: string,
        public description?: string,
        public url?: string,
        public urlToImage?: string,
        public pusblishedAt?: string,
        public content?: string,
    ){}
}
