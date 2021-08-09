import { Article } from '../@types';
import data from '../data';

export const getNews = (): Promise<Article[]> => {
  console.log('fetching...');
  return new Promise((resolve, reject) => {
    resolve(data.articles);
  });
};
