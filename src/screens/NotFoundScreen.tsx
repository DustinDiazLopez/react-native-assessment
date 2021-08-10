import React from 'react';
import {
  Text, Pressable, View,
} from 'react-native';
import {
  StackScreenProps,
} from '@react-navigation/stack';

import { RootStackParamList } from '../../types';
import styles from '../styles/not-found';

const NotFoundScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
    <Pressable onPress={(): void => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </Pressable>
  </View>
);

export default NotFoundScreen;
