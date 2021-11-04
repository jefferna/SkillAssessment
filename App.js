import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/ducks/store';
import HomeScreen from './src/screens/HomeSreen/HomeScreen';
import PostsStackNavigator from './src/navigations/PostsStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import MainStackNavigator from './src/navigations/MainStackNavigator';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <PostsStackNavigator /> */}
        {/* <LoginScreen /> */}
        <MainStackNavigator />
        {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
