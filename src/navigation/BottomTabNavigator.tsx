/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-props-no-spreading */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/NewsScreen';
import { BottomTabParamList, HomeParamList, NewsParamList } from '../../types';

type IconProp = {
  name: React.ComponentProps<typeof Ionicons>['name']; color: string,
};

const TabBarIcon: React.FC<IconProp> = (props) => (
  <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
);

const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator: React.FC<unknown> = (): JSX.Element => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="TabOneScreen"
      component={TabOneScreen}
      options={{ headerTitle: 'Tab One Title' }}
    />
  </HomeStack.Navigator>
);

const NewsStack = createStackNavigator<NewsParamList>();

const NewsNavigator: React.FC<unknown> = (): JSX.Element => (
  <NewsStack.Navigator>
    <NewsStack.Screen
      name="TabTwoScreen"
      component={TabTwoScreen}
      options={{ headerTitle: 'Tab Two Title' }}
    />
  </NewsStack.Navigator>
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC<unknown> = (): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }): JSX.Element => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={NewsNavigator}
        options={{
          title: 'News',
          tabBarIcon: ({ color }): JSX.Element => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
