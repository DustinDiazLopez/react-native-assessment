import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Article } from '../@types';

import Loading from '../components/Loading';
import NewsList from '../components/NewsList';
import getNews from '../remote';

import styles from '../styles/news';

const LIMIT = 50;
const NewsScreen: React.FC<unknown> = (): JSX.Element => {
  const [news, setNews] = useState<Article[] | null>(null);

  const fetchData = (): void => {
    (async (): Promise<void> => {
      const newsData = await getNews(LIMIT);
      setNews(newsData.splice(0, LIMIT));
    })();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {
        news
          ? <NewsList articles={news} />
          : <Loading />
      }
    </View>
  );
};

export default NewsScreen;
