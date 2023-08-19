export interface ArticleMeta {
    id: string;
    title: string;
    description: string;
    readable_publish_date: string;
    slug:string;
    path:string;
    url: string;
    comments_count:string;
    public_reactions_count: string;
    collection_id?: number;
    published_timestamp: string;
    positive_reactions_count: string;
    cover_image: string;
    social_image: string;
    tag_list: string[];
}

export interface SingleArticleMeta extends ArticleMeta {
    body_html: string;
    body_markdown: string
}