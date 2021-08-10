/* eslint-disable global-require */
import React from 'react';
import { Text, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const spinValue = new Animated.Value(0);

Animated.timing(
  spinValue,
  {
    toValue: 1,
    duration: 60 * 1000,
    easing: Easing.circle,
    useNativeDriver: true,
  },
).start();

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '720deg'],
});

const Loading = (): JSX.Element => (
  <Animated.View style={{ transform: [{ rotate: spin }] }}>
    <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Please wait...</Text>
  </Animated.View>
);

export default Loading;
