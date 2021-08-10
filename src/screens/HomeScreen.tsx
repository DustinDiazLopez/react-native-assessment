import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import styles from '../styles/home';

const HomeScreen: React.FC<unknown> = (): JSX.Element => {
  const nav = useNavigation();

  const onShowNewsHandler = (): void => {
    nav.navigate('NewsScreen', {
      limit: 50,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Assessment</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>&quot;Intelligence is the ability to adapt to change.&quot;</Text>
      <Text style={styles.author}>- Stephen Hawking</Text>

      <View style={styles.separator} />

      <Button
        onPress={onShowNewsHandler}
        title="Show News"
        color={Colors.light.tint}
      />
    </View>
  );
};

export default HomeScreen;
