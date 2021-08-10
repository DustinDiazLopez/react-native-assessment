import React from 'react';
import {
  View, Text, Image, Pressable, StyleProp, ViewStyle, Linking,
} from 'react-native';

import { Article } from '../../@types';
import styles from './styles';

type ArticleItemProps = {
  article: Article,
};

const ArticleItem: React.FC<ArticleItemProps> = ({ article }): JSX.Element => {
  console.log('');
  return (
    <Pressable
      onPress={(): void => {
        Linking.openURL(article.url);
      }}
      style={({ pressed }): StyleProp<ViewStyle> => [
        { opacity: pressed ? 0.5 : 1 },
        styles.container,
      ]}
    >
      <Text style={styles.title}>{article.title.trim() || 'No Title'}</Text>
      <Text style={styles.description}>{article.description.trim() || 'No Description.'}</Text>
      <View style={styles.imageContainer}>
        {
          article.urlToImage
            ? <Image source={{ uri: article.urlToImage }} style={styles.image} resizeMode="cover" />
            : <Text style={styles.noImage}>No Image Available</Text>
        }
      </View>
    </Pressable>
  );
};

export default ArticleItem;
