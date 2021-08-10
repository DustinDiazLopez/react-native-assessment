import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { HomeParamList } from '../../types';
import { Article } from '../@types';

import Loading from '../components/Loading';
import NewsList from '../components/NewsList';
import getNews from '../remote';

import styles from '../styles/news';

type NewsScreenProps = {
  route: RouteProp<HomeParamList, 'NewsScreen'>
};

const NewsScreen: React.FC<NewsScreenProps> = ({ route }): JSX.Element => {
  const [news, setNews] = useState<Article[]>();

  const { limit } = route.params;

  useEffect(() => {
    getNews(limit)
      .then(setNews)
      .catch((err) => {
        console.error(err);
        setNews([]);
      });
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
