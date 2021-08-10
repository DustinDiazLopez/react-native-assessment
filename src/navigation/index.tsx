/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationContainer, DefaultTheme, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Pressable, View, ViewStyle, StyleProp,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import { HomeParamList, RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import NewsScreen from '../screens/NewsScreen';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator: React.FC<unknown> = (): JSX.Element => {
  const nav = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerLeft: (): null => null,
        }}
      />
      <HomeStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          headerTitle: 'News',
          headerLeft: (): JSX.Element => (
            <View style={{
              marginLeft: 20,
            }}
            >
              <Pressable
                onPress={(): void => {
                  nav.navigate('HomeScreen');
                }}
                style={({ pressed }): StyleProp<ViewStyle> => [
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <AntDesign name="home" size={25} color={Colors.light.text} />
              </Pressable>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<unknown> = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={HomeNavigator} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  </Stack.Navigator>
);

const Navigation: React.FC<unknown> = (): JSX.Element => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
