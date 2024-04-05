export interface IArticleResponse {
  content: string;
}

export interface IArticle {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
}