import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeSreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/ComentsScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={BottomTabNavigator} name="BottomTabNavigator" />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
