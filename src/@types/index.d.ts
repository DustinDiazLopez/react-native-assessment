export type Source = {
  id: string | null,
  name: string,
};

export type Article = {
  title: string,
  description: string,
  url: string,
  urlToImage: string | null,
  source: Source,
  author: string,
  publishedAt: string,
  content: string,
};

export type ArticlesResponse = {
  status: string,
  totalResults: number,
  articles: Article[]
};
