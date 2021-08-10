import React from 'react';
import { FlatList, Text } from 'react-native';
import { Article } from '../../@types';
import ArticleItem from '../ArticleItem';

type NewsListProps = {
  articles: Article[],
};

const NewsList: React.FC<NewsListProps> = ({ articles }): JSX.Element => {
  const renderItem = ({ item }: { item: Article }): JSX.Element => (
    <ArticleItem article={item} />
  );

  return (
    <>
      {
        articles.length !== 0
          ? (
            <FlatList
              data={articles}
              renderItem={renderItem}
              keyExtractor={(item): string => escape(item.title + item.author + item.url)}
            />
          )
          : <Text>No News Articles</Text>
      }
    </>
  );
};

export default NewsList;
