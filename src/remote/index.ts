import { Article } from '../@types';
import { NEW_DATA as data } from './data';

const sleep = (ms: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms));

export default async (limit: number): Promise<Article[]> => new Promise((resolve, reject) => {
  if (data.status === 'ok') {
    resolve(data.articles.splice(0, limit));
  } else {
    resolve([]);
  }
});
