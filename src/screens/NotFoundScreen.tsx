import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import {
  StackNavigationProp, StackScreenProps,
} from '@react-navigation/stack';

import { RootStackParamList } from '../../types';
import styles from '../styles/not-found';

const NotFoundScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
    <TouchableOpacity onPress={(): void => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

export default NotFoundScreen;
